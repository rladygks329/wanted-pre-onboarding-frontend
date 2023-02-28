import React, { Fragment, useState } from 'react';

const TodoList = React.memo((props) => {
  const { id, todo, isCompleted } = props.data;
  const { update, remove } = props;
  const [todoItem, setTodoItem] = useState({
    content: todo,
    user_input: todo,
    isEditing: false,
    isCompleted: isCompleted,
  });
  const toggleComplete = (e) => {
    update(id, todoItem.content, !todoItem.isCompleted);
    setTodoItem({
      ...todoItem,
      isCompleted: !todoItem.isCompleted,
    });
  };
  const toggleEditing = (e) => {
    setTodoItem({
      ...todoItem,
      isEditing: !todoItem.isEditing,
    });
  };
  const handleChange = (e) => {
    setTodoItem({ ...todoItem, user_input: e.target.value });
  };
  const handleCancel = (e) => {
    setTodoItem({
      ...todoItem,
      user_input: todoItem.content,
      isEditing: false,
    });
  };
  const handleEdit = (e) => {
    update(id, todoItem.user_input, todoItem.isCompleted);
    setTodoItem({
      ...todoItem,
      content: todoItem.user_input,
      isEditing: false,
    });
  };
  const handleRemove = (e) => {
    remove(id);
  };
  return (
    <li>
      <label>
        <input
          type='checkbox'
          checked={todoItem.isCompleted}
          onChange={toggleComplete}
        />
      </label>
      {todoItem.isEditing ? (
        <>
          <input
            data-testid='modify-input'
            value={todoItem.user_input}
            onChange={handleChange}
          />
          <button data-testid='submit-button' onClick={handleEdit}>
            제출
          </button>
          <button data-testid='cancel-button' onClick={handleCancel}>
            취소
          </button>
        </>
      ) : (
        <>
          <span>{todoItem.content}</span>
          <button data-testid='modify-button' onClick={toggleEditing}>
            수정
          </button>
          <button data-testid='delete-button' onClick={handleRemove}>
            삭제
          </button>
        </>
      )}
    </li>
  );
});

export default TodoList;
