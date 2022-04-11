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

  // 削除ボタンを押された時の処理
  const onClickDelete = (index) => {
    // 新しい配列を用意 ⇒ index番の要素を削除する ⇒ inCompleteTodosにセット
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
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
          {incompleteTodos.map((todo, index) => {
            // 第２引数にindex番号を取得できる
            return (
              // Reactでループを書く時（mapやfilter）は、keyの指定が必要
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>完了</button>
                {/* onClickDeleteに引数を渡すが、onClickDelete(index)とするとこの時点で関数が実行されてしまうので注意 */}
                {/* 関数に引数を渡したい場合はアロー関数の形で書いてあげる */}
                <button onClick={() => onClickDelete(index)}>削除</button>
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
