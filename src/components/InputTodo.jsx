import React from "react";

export const InputTodo = (props) => {
  // propsから値を受け取る
  const { todoText, onChangeTodoText, onClickAdd } = props;
  return (
    <div className="input-area">
      <input
        type="text"
        value={todoText}
        onChange={onChangeTodoText}
        placeholder="TODOを入力"
      />
      <button onClick={onClickAdd}>追加</button>
    </div>
  );
};
