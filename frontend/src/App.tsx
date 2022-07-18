import React, { useState } from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";
import ToDoList from "./components/ToDoList";
import { ToDo } from "./model";
import { addApi } from "./api/add";
import { isDoneUpdateApi } from "./api/update";
import { useFetchAsync } from "./api/get";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {
  const url = `http://localhost:4000/to-do/`;
  const data = useFetchAsync(url);
  const isDoneToDo = data.filter((todo: ToDo) => todo.isDone === true);
  const notIsDoneToDo = data.filter((todo: ToDo) => todo.isDone === false);
  const [toDo, setToDo] = useState<string>("");
  const [toDos, setToDos] = useState<ToDo[]>(
    notIsDoneToDo ? notIsDoneToDo : []
  );
  const [completedToDos, setCompletedToDos] = useState<ToDo[]>(
    isDoneToDo ? isDoneToDo : []
  );

  const handleDone = async (id: number, isDone: boolean) => {
    if (!isDone) {
      const index = toDos.findIndex((toDo) => toDo.id === id);
      let add = toDos[index];
      add.isDone = true;
      toDos.splice(index, 1);
      completedToDos.splice(index, 0, add);
    } else {
      const index = completedToDos.findIndex((toDo) => toDo.id === id);
      let add = completedToDos[index];
      add.isDone = false;
      completedToDos.splice(index, 1);
      toDos.splice(index, 0, add);
    }
    setCompletedToDos((prev) => {
      return [...completedToDos];
    });
    setToDos(() => {
      return [...toDos];
    });
    isDoneUpdateApi(id, !isDone);
  };

  const handleAdd = async (e: React.FormEvent) => {
    const isDone = false;
    e.preventDefault();

    if (toDo) {
      const res = await addApi(toDo, isDone);
      if (res !== 0) {
        setToDos([...toDos, { id: res, description: toDo, isDone }]);
        setToDo("");
      } else {
        return console.warn("api 보내기 실패");
      }
    }
  };

  const onDragEnd = (result: DropResult) => {
    if (result) {
      const { source, destination } = result;
      if (destination && source) {
        if (
          destination.droppableId === source.droppableId &&
          destination.index === source.index
        )
          return;

        let add,
          active = toDos,
          complete = completedToDos;

        if (source.droppableId === "ToDosList") {
          add = active[source.index];
          add.isDone = true;
          active.splice(source.index, 1);
        } else {
          add = complete[source.index];
          add.isDone = false;
          complete.splice(source.index, 1);
        }

        if (destination.droppableId === "ToDosList") {
          active.splice(destination.index, 0, add);
        } else {
          complete.splice(destination.index, 0, add);
        }
        setCompletedToDos(complete);
        setToDos(active);
        isDoneUpdateApi(add.id, add.isDone);
      }
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">ToDoList</span>
        <InputFeild toDo={toDo} setToDo={setToDo} handleAdd={handleAdd} />
        <ToDoList
          toDos={toDos}
          setToDos={setToDos}
          completedToDos={completedToDos}
          setCompletedToDos={setCompletedToDos}
          handleDone={handleDone}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
