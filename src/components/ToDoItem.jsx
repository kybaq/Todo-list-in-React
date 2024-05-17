const ToDoItem = ({ toDo, setToDos }) => {
  const deleteToDo = (id) => {
    setToDos((prev) => prev.filter((toDo) => toDo.id !== id));
    // prev 객체가 이전의 상태 값(ToDos)을 그대로 가지고 있다고 함. 그래서 넘겨주지 않아도 setState 만으로도 변경이 가능하다.
  };

  const toggleToDo = (id) => {
    // 내가 선택한 요소가 맞으면, isDone 값을 반대로 바꿔주기만 하면 됨.
    // 상태는 바뀌어서 다시 렌더링이 이루어지고, isDone 값에 따라 알아서 분류되기 때문!
    setToDos(
      (prev) =>
        prev.map((toDo) =>
          toDo.id === id ? { ...toDo, isDone: !toDo.isDone } : toDo
        )
      // toDo 를 spread 하면, id, title, isDone 과 같은 프로퍼티가 있을 것. 여기서 isDone 을 다시 빼내서 바꾸는 것 뿐임!
      // 그리고 isDone 이 객체 형태로 오기때문에, 다시 객체로 감싸준 것.
    );
  };

  return (
    <>
      <div>
        <h4>{toDo.title}</h4>
        <p>{toDo.content}</p>

        <div>
          <button onClick={() => toggleToDo(toDo.id)}>
            {toDo.isDone ? "취소" : "완료"}
          </button>
          <button onClick={() => deleteToDo(toDo.id)}>삭제</button>
        </div>
      </div>
    </>
  );
};

export default ToDoItem;
