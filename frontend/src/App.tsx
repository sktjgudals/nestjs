import React, { useState } from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";
import ToDoList from "./components/ToDoList";
import { ToDo } from "./model";
import { addApi } from "./api/add";

const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>("");
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const isDone = false;
  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (toDo) {
      const res = await addApi(toDo, isDone);
      if (res !== 0) {
        setToDos([...toDos, { id: res, toDo: toDo, isDone }]);
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
