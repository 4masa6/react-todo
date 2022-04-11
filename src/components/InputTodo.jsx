import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  borderRadius: "8px",
  padding: "8px",
  margin: "8px"
};

export const InputTodo = (props) => {
  // propsから値を受け取る
  const { todoText, onChangeTodoText, onClickAdd, disabled } = props;
  return (
    <div style={style}>
      <input
        type="text"
        value={todoText}
        onChange={onChangeTodoText}
        placeholder="TODOを入力"
        disabled={disabled}
      />
      <button onClick={onClickAdd} disabled={disabled}>
        追加
      </button>
    </div>
  );
};
