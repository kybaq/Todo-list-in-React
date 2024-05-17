import ToDoItem from "./ToDoItem";
// ToDoContainer 에서 toDos 를 받아옴.
// toDos 배열에서 ToDoItem 에게

const ToDoList = ({ title, toDos, setToDos }) => {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>
            <ToDoItem toDo={toDo} setToDos={setToDos} />
            {/* 개별적인 toDo 내용과 버튼은 ToDoItem 에서 렌더링. */}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ToDoList;
