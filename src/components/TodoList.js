import React, { useEffect, useState } from "react";

const TodoList = React.memo((props) => {
  let { todo, isCompleted, userId } = props.data;
  const [content, setContent] = useState(todo);
  const [completed, setCompleted] = useState(isCompleted);
  const handleChange = (e) => {
    setCompleted(!completed);
  };
  useEffect(() => {}, [props]);
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
