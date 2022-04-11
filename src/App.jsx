import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState(""); // 入力値を保持するstate
  const [incompleteTodos, setIncompleteTodos] = useState(["あああ", "いいい"]); // 未完了のTODOを保持するstate
  const [completeTodos, setCompleteTodos] = useState(["ううう"]); // 完了のTODOを保持するstate

  // 入力値が変更されたら、その値をtodoTextにセット
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  // 追加ボタンをクリックしたら、新しい配列を作成してincompleteTodosにセット
  const onClickAdd = () => {
    if (todoText === "") return; // 入力値が空の場合はreturn
    const newTodos = [...incompleteTodos, todoText]; // 今のincompleteTodosの配列に、todoTextを追加した新しい配列ができる
    setIncompleteTodos(newTodos);
    setTodoText(""); // フォームの値を削除する
  };

  return (
    <>
      <div className="input-area">
        <input
          type="text"
          value={todoText}
          onChange={onChangeTodoText}
          placeholder="TODOを入力"
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              // Reactでループを書く時（mapやfilter）は、keyの指定が必要
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
