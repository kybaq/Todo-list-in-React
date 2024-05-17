import { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

const ToDoContainer = () => {
  const initialState = [
    {
      id: 1,
      title: "할 일1",
      content: "내용1",
      isDone: false,
    },
    {
      id: 2,
      title: "할 일2",
      content: "내용2",
      isDone: true,
    },
  ];

  const [toDos, setToDos] = useState(initialState);
  // ToDoForm 컴포넌트에서 제어함.

  const workingToDos = toDos.filter((toDo) => !toDo.isDone);
  const doneToDos = toDos.filter((toDo) => toDo.isDone);

  return (
    <>
      <h2>My To Do List</h2>
      <ToDoForm setToDos={setToDos} />
      <ToDoList title="Working" toDos={workingToDos} setToDos={setToDos} />
      {/* isDone === true */}
      <ToDoList title="Done!" toDos={doneToDos} setToDos={setToDos} />
      {/* isDone === false */}
    </>
  );
};

export default ToDoContainer;
