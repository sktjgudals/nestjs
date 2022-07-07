import React, { useState } from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";
import ToDoList from "./components/ToDoList";
import { ToDo } from "./model";
import { addApi } from "./api/add";

const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>("");
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const id = Date.now();
  const isDone = false;
  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (toDo) {
      const res = await addApi(id, toDo, isDone);
      if (res) {
        setToDos([...toDos, { id, toDo: toDo, isDone }]);
        setToDo("");
      } else {
        return console.warn("api보내기 실패");
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
