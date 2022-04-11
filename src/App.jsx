import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoText, setTodoText] = useState(""); // 入力値を保持するstate
  const [incompleteTodos, setIncompleteTodos] = useState([]); // 未完了のTODOを保持するstate
  const [completeTodos, setCompleteTodos] = useState([]); // 完了のTODOを保持するstate

  // 入力値が変更されたら、その値をtodoTextにセット
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  // 追加ボタンをクリックしたら、新しい配列を作成してincompleteTodosにセット
  const onClickAdd = () => {
    if (todoText === "") return; // 入力値が空の場合はreturn
    const newTodos = [...incompleteTodos, todoText]; // 今のincompleteTodosの配列に、todoTextを追加した新しい配列ができる
    setIncompleteTodos(newTodos);
    setTodoText(""); // フォームの値を削除する
  };

  // 削除ボタンを押したときの処理
  const onClickDelete = (index) => {
    // 新しい配列を用意 ⇒ index番の要素を削除する ⇒ inCompleteTodosにセット
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  // 完了ボタンを押したときの処理
  const onClickComplete = (index) => {
    // 未完了の配列から削除
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);

    // 完了の配列に追加
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };

  // 戻すボタンを押したときの処理
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteTodos(newCompleteTodos);

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      {/* propsで値を渡す */}
      <InputTodo
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        onClickAdd={onClickAdd}
      />
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
};
