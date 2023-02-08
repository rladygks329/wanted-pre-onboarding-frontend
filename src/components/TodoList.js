import React, { useState } from "react";

const TodoList = React.memo((props) => {
  const { id, todo, isCompleted } = props.data;
  const { update, remove } = props;
  const [content, setContent] = useState(todo);
  const [completed, setCompleted] = useState(isCompleted);
  const handleChange = (e) => {
    update(id, todo, !isCompleted).then(setCompleted(!completed));
  };
  return (
    <li>
      <label>
        <input type="checkbox" checked={completed} onChange={handleChange} />
        <span>{content}</span>
      </label>
      <button data-testid="modify-button">수정</button>
      <button
        data-testid="delete-button"
        onClick={() => {
          remove(id);
        }}
      >
        삭제
      </button>
    </li>
  );
});

export default TodoList;
