import React, { useEffect, useState } from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";
import ToDoList from "./components/ToDoList";
import { ToDo } from "./model";
import { addApi } from "./api/add";
import { getApi } from "./api/get";

const App: React.FC = () => {
  let arr = new Array<any>();
  const [toDo, setToDo] = useState<string>("");
  const [toDos, setToDos] = useState<ToDo[]>(arr);
  useEffect(() => {
    async function getList() {
      arr.push(await getApi());
    }
    getList();
  }, []);
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
  console.log(toDos);
  return (
    <div className="App">
      <span className="heading">ToDoList</span>
      <InputFeild toDo={toDo} setToDo={setToDo} handleAdd={handleAdd} />
      <ToDoList toDos={toDos} setToDos={setToDos} />
    </div>
  );
};

export default App;
