import { useState } from 'react'
import './styles/reset.css'
import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import body from './styles/body.module.css'
import form from './styles/form.module.css'
import main from './styles/main.module.css'
import header from './styles/header.module.css'
import list from './styles/list.module.css'
import Button from 'react-bootstrap/Button'

function App() {
  return (
    <>
      <ToDoList />
    </>
  );
}

const ToDoList = () => {
  const [toDoTitle, setToDoTitle] = useState("");
  const [toDoContent, setToDoContent] = useState("");
  const [doneJobList, setAsDone] = useState([]);
  const [unDoneJobList, setAsUnDone] = useState([]);

  const handleTodoTitle = (evt) => {
    setToDoTitle(evt.target.value) // input value 상태 관리
  }

  const handleToDoContent = (evt) => {
    setToDoContent(evt.target.value) // input vlaue 상태
  }

  const handleSubmit = (evt) => {
    evt.preventDefault(); // 새로 고침 이벤트 방지

    if (toDoTitle === "" && toDoContent === "") {
      alert("할 일을 입력해주세요!") // 예외 처리
      return;
    }

    const newToDo = {
      id: Date.now(),
      toDoTitle,
      toDoContent,
      isDone: false
    }

    setAsUnDone([...unDoneJobList, newToDo]); // 기본으로는 미완료 작업으로 설정.
    setToDoTitle(""); // input value 상태 초기화 하기 
    setToDoContent("")
  }

  const handleDelete = (jobList, id) => {

    let updatedList = jobList.filter((elem) => elem.id !== id)
    // 삭제 버튼을 누른 요소가 아닌 경우 return

    if (jobList === doneJobList) {
      setAsDone(updatedList);
    } else {
      setAsUnDone(updatedList);
    }
  }

  const handleDone = (id) => {
    // target 을 완료한 작업으로 이동하기 위함
    const jobToComplete = unDoneJobList.find((elem) => elem.id === id) // 완료 버튼을 누른 요소를 return
    // const jobToComplete = unDoneJobList.find((elem) => { return elem.id === id })

    jobToComplete.isDone = true; // 유효한 작업에게 완료를 눌렀을 경우.

    if (jobToComplete.isDone) { // truthy 값이 되니까 사용.
      setAsDone([...doneJobList, jobToComplete]); // 완료한 작업으로 옮김.

      // 한 list item 이 진행 중인 작업 목록과, 완료한 작업 목록에 둘 다 있으면 안되니까 설정.
      const upDatedList = unDoneJobList.filter((elem) => elem.id !== id) // 완료 버튼을 누른 요소 제외하고 return
      // 목록 갱신, 상태 갱신할 때 객체인지 아닌지 확인하기
      // 지금은 객체 형태를 넣기 때문에 그냥 넣으면 됨.
      // 객체로 씌워서 넣으면, 아래에서 elem 으로 접근해도 내부 객체에 1 depth 깊이 접근 해야함
      setAsUnDone(upDatedList);
    }
  };

  const handleCancel = (id) => {
    // target 을 진행 중인 작업으로 옮기기 위해, 요소 찾기
    const jobsToCancel = doneJobList.find((elem) => elem.id === id)
    // const jobToCancel = doneJobList.find((elem) => { return elem.id === id })

    jobsToCancel.isDone = false;

    if (!jobsToCancel.isDone) { // 성공적으로 값이 false 로 변하면 동작하도록 
      setAsUnDone([...unDoneJobList, jobsToCancel]); // 미완료 작업으로 보내버림

      // 취소 버튼을 누른 요소 제외하고 return
      const updatedList = doneJobList.filter((elem) => elem.id !== id)
      // 완료 작업에서 제외하고 목록 갱신
      setAsDone(updatedList);
    }
  };

  return (
    <div className={body.layout}>
      <header className={header.container}>
        <span>My To-do list</span> <span>React</span>
      </header>

      <form action="#" onSubmit={handleSubmit} className={form.form}>
        <input
          type="text"
          onChange={handleTodoTitle}
          value={toDoTitle}
          className={form.input}
          placeholder="할 일 제목"
        />
        <input
          type="text"
          onChange={handleToDoContent}
          value={toDoContent}
          className={form.input}
          placeholder="할 일 내용"
        />
        <Button variant="primary" type='submit' className={form.submit_btn}>추가하기</Button>
      </form>

      <main style={main}>
        <WorkList
          doneJobList={doneJobList}
          unDoneJobList={unDoneJobList}
          handleDelete={handleDelete}
          handleDone={handleDone}
          handleCancel={handleCancel}
        />
        {/* 삭제 기능함수 또한 자식 요소에 전달해준다 */}
      </main>
    </div>
  )
}

const WorkList = ({ doneJobList, unDoneJobList, handleDelete, handleDone, handleCancel }) => {
  // console.log(list);

  return (
    <>
      <h5 className={list.title}>💼진행 중인 작업</h5>
      <ul className={list.list}>
        {/* 안 끝난 작업 */}
        {
          unDoneJobList.map((elem) => {
            return (
              <li key={elem.id} className={list.item}>
                <h4>{elem.toDoTitle}</h4>
                <p>{elem.toDoContent}</p>
                <Button variant='danger' onClick={() => handleDelete(unDoneJobList, elem.id)}>삭제</Button>
                {/* 함수의 인자로 해당 요소의 id 를 넘겨버리면 한 번에 target 지정이 가능!*/}

                <Button variant='success' onClick={() => handleDone(elem.id)}>완료</Button>
                {/* 화살표 함수로 사용하지 않으면, 요소가 생성될 때 바로 실행되어버림. */}
              </li>
            )
          })
        }
      </ul>

      <h5 className={list.title}>🎊완료한 작업</h5>
      <ul className={list.list}>
        {/* 끝난 작업 */}
        {
          doneJobList.map((elem) => {
            return (
              <li key={elem.id} className={list.item}>
                <h4>{elem.toDoTitle}</h4>
                <p>{elem.toDoContent}</p>
                <Button variant='danger' onClick={() => handleDelete(doneJobList, elem.id)}>삭제</Button>
                {/* 함수의 인자로 해당 요소의 id 를 넘겨버리면 한 번에 target 지정이 가능!*/}
                <Button variant='secondary' onClick={() => handleCancel(elem.id)}>취소</Button>
                {/* 화살표 함수로 사용하지 않으면, 요소가 생성될 때 바로 실행되어버림. */}
              </li>
            )
          })
        }
      </ul>
    </>

  )
}


export default App
