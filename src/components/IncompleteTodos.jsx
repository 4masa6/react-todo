import React from "react";

export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;

  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          // 第２引数にindex番号を取得できる
          return (
            // Reactでループを書く時（mapやfilter）は、keyの指定が必要
            <div key={todo} className="list-row">
              <li>{todo}</li>
              {/* onClickDeleteに引数を渡すが、onClickDelete(index)とするとこの時点で関数が実行されてしまうので注意 */}
              {/* 関数に引数を渡したい場合はアロー関数の形で書いてあげる */}
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
