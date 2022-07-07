import React from "react";
import { ToDo } from "../model";
import SingleToDo from "./SingleToDo";
import "./style.css";

interface Props {
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoList: React.FC<Props> = ({ toDos, setToDos }) => {
  return (
    <div className="toDos">
      {toDos &&
        toDos.map((toDo) => (
          <SingleToDo
            key={toDo.id}
            toDo={toDo}
            toDos={toDos}
            setToDos={setToDos}
          />
        ))}
    </div>
  );
};

export default ToDoList;
