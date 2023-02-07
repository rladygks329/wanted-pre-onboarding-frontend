import React, { useState } from "react";

const TodoList = (props) => {
  let { todo, isCompleted, userId } = props.data;
  const [content, setContent] = useState(todo);
  const [completed, setCompleted] = useState(isCompleted);
  const handleClick = (e) => {
    setCompleted(!completed);
  };
  return (
    <li>
      <label>
        <input type="checkbox" checked={completed} onClick={handleClick} />
        <span>{content}</span>
      </label>
    </li>
  );
};

export default TodoList;
