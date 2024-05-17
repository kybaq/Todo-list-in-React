import { useState } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";

const ToDoForm = ({ setToDos }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = (evt) => {
    if (!title || !content) {
      Swal.fire({
        title: "이런..",
        text: "빈 칸을 모두 채워주세요!",
        icon: "error",
      });
    }

    evt.preventDefault();

    setTitle("");
    setContent("");

    const nextToDo = {
      id: uuidv4(),
      title,
      content,
      isDone: false,
    };

    setToDos((toDo) => [...toDo, nextToDo]);
    setTitle("");
    setContent("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={title}
          onChange={(evt) => setTitle(evt.target.value)}
        />
        <input
          type="text"
          value={content}
          onChange={(evt) => setContent(evt.target.value)}
        />

        <button type="submit">추가하기</button>
      </form>
    </>
  );
};

export default ToDoForm;
