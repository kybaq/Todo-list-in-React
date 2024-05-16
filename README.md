# To do list in **React**

## 요구사항 목록

1. To do 추가 후 input value 비우기 -> 구현 완료
2. 미완료 / 완료 여부 관계없이 할 일 삭제 -> 구현 완료
3. isDone 상태에 따라, 버튼 라벨 조건부 렌더링 -> 실패, isDone 상태에 따라 완료 목록으로 보내거나 미완료 목록으로 보내는 방법으로 구현함
4. 진행중 상태라면 상단 목록, 완료 상태라면 하단 목록에 있도록 구현 -> 구현 완료
5. Layout 최대 너비, 가운데 정렬 -> 완료

## 컴포넌트 구조

`App()` -> `ToDoList() -> `WorkList()`

`App()` 컴포넌트 내부에 `ToDoList()` 라는 자식 컴포넌트를 구성함.
`ToDoList` 컴포넌트 내부는 페이지의 `<header>`, `<form>`, `<main>` 요소를 구성함.
`<main>` 요소는 다시 한 번 `WorkList()` 컴포넌트로 구성되어, 미완료 작업 목록(`unDoneJobList`)와 완료 작업 목록(`doneJobList`)를 담당함.

두 개의 List 를 따로 구성해 재사용을 하기 어려운 구조가 된 것 같음.