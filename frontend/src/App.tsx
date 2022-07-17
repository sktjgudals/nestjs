import React, { useState } from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";
import ToDoList from "./components/ToDoList";
import { ToDo } from "./model";
import { addApi } from "./api/add";
import { useFetchAsync } from "./api/get";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () => {
  const url = `http://localhost:4000/to-do/`;
  const data = useFetchAsync(url);
  const [toDo, setToDo] = useState<string>("");
  const [toDos, setToDos] = useState<ToDo[]>(data ? data : []);
  const [completedToDos, setCompletedToDos] = useState<ToDo[]>([]);
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
          active.splice(source.index, 1);
        } else {
          add = complete[source.index];
          complete.splice(source.index, 1);
        }

        if (destination.droppableId === "ToDosList") {
          active.splice(destination.index, 0, add);
        } else {
          complete.splice(destination.index, 0, add);
        }
        setCompletedToDos(complete);
        setToDos(active);
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
        />
      </div>
    </DragDropContext>
  );
};

export default App;
