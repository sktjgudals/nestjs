import React, { useEffect, useState } from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";
import ToDoList from "./components/ToDoList";
import { ToDo } from "./model";
import { addApi } from "./api/add";
import { useFetchAsync } from "./api/get";

const App: React.FC = () => {
  const url = `http://localhost:4000/to-do/`;
  const data = useFetchAsync(url);
  const [toDo, setToDo] = useState<string>("");
  const [toDos, setToDos] = useState<ToDo[]>(data);
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

  return (
    <div className="App">
      <span className="heading">ToDoList</span>
      <InputFeild toDo={toDo} setToDo={setToDo} handleAdd={handleAdd} />
      <ToDoList toDos={toDos} setToDos={setToDos} />
    </div>
  );
};

export default App;
