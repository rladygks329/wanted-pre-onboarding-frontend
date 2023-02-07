import React, { useState } from "react";

const TodoList = React.memo((props) => {
  const { id, todo, isCompleted } = props.data;
  const { update } = props;
  const [content, setContent] = useState(todo);
  const [completed, setCompleted] = useState(isCompleted);
  const handleChange = (e) => {
    setCompleted(!completed);
    update(id, todo, !isCompleted);
  };
  return (
    <li>
      <label>
        <input type="checkbox" checked={completed} onChange={handleChange} />
        <span>{content}</span>
      </label>
    </li>
  );
});

export default TodoList;
