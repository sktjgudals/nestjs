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
    <div className="container">
      <div className="toDos">
        <span className="toDos__heading">Active Tasks</span>
        {toDos.map((toDo) => (
          <SingleToDo
            key={toDo.id}
            toDo={toDo}
            toDos={toDos}
            setToDos={setToDos}
          />
        ))}
      </div>
      <div className="toDos_remove">
        <div className="toDos">
          <span className="toDos__heading">Completed Tasks</span>
          {toDos.map((toDo) => (
            <SingleToDo
              key={toDo.id}
              toDo={toDo}
              toDos={toDos}
              setToDos={setToDos}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
