import React, { useEffect, useState } from "react";
import { ToDo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./style.css";
import { deleteApi } from "../api/delete";
import { useRef } from "react";

type Props = {
  toDo: ToDo;
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
};

const SingleToDo = ({ toDo, toDos, setToDos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editToDo, setEditToDo] = useState<string>(toDo.description);
  const handleDone = (id: number) => {
    setToDos(
      toDos.map((todo) =>
        todo.id === id ? { ...toDo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = async (id: number) => {
    const res = await deleteApi(id);
    if (res) setToDos(toDos.filter((todo) => todo.id !== id));
    else return console.warn("error");
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setToDos(
      toDos.map((toDo) =>
        toDo.id === id ? { ...toDo, description: editToDo } : toDo
      )
    );
    setEdit(!edit);
  };
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="toDos__single" onSubmit={(e) => handleEdit(e, toDo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editToDo}
          onChange={(e) => setEditToDo(e.target.value)}
          className="todos_single--text"
        />
      ) : toDo.isDone ? (
        <span className="toDos__single--text">{toDo.description}</span>
      ) : (
        <span className="toDos__single--text">{toDo.description}</span>
      )}
      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !toDo.isDone) {
              setEdit(!edit);
            } else {
              setEdit(!edit);
            }
          }}
        >
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
