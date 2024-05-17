import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout></Layout>
    </>
  );
}

export default App;

// TODO: [삭제하기] 버튼 클릭 시 Working or Done 에 있는 것과 상관없이 삭제 처리 되도록
// TODO: Todo의 isDone 상태에 따라, 취소 또는 완료로 표현되도록. 그리고 Working 이면 상단, Done 이면 하단 목록에 위치하도록.
