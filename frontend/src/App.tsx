import React, { useState } from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";
import ToDoList from "./components/ToDoList";
import { ToDo } from "./model";

// let name: string;
// let role: [number, string];
// let printName: (name: string) => void;
// let personName: unknown;
// interface Person {
//   name: string;
//   age?: number;
// }
// interface Guy extends Person {
//   profession: string;
// }
// type X = {
//   a: string;
//   b: number;
// }
// type Y = X & {
//   c: string;
//   d: number;
// }
// let y: Y = {
//   c: "ef",
//   d: 42
// }

const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>("");
  const [toDos, setToDos] = useState<ToDo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (toDo) {
      setToDos([...toDos, { id: Date.now(), toDo: toDo, isDone: false }]);
      setToDo("");
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
