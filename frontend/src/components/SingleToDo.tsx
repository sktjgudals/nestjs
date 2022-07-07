import React from "react";
import { ToDo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./style.css";

type Props = {
  toDo: ToDo;
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
};

const SingleToDo = ({ toDo, toDos, setToDos }: Props) => {
  const handleDone = (id: number) => {
    setToDos(
      toDos.map((todo) =>
        todo.id === id ? { ...toDo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id: number) => {
    //   setToDos
    console.log(id);
  };

  return (
    <form className="toDos__single">
      {toDo.isDone ? (
        <span className="toDos__single--text">{toDo.toDo} </span>
      ) : (
        <span className="toDos__single--text">{toDo.toDo}</span>
      )}
      <div>
        <span className="icon" onClick={() => handleEdit(toDo.id)}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(toDo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(toDo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleToDo;
