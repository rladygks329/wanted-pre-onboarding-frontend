import React, { Fragment, useState } from 'react';
import { useTodo } from '../contexts/TodoContext';
import { Todo } from '../types/Todo';

type propType = {
  data: Todo;
};

const TodoItem = React.memo((props: propType) => {
  const { id, todo, isCompleted } = props.data;
  const { updateTodo, deleteTodo } = useTodo();

  const [todoItem, setTodoItem] = useState({
    content: todo,
    user_input: todo,
    isEditing: false,
    isCompleted: isCompleted,
  });

  const toggleComplete = (e: any) => {
    updateTodo(id, todoItem.content, !todoItem.isCompleted);
    setTodoItem({
      ...todoItem,
      isCompleted: !todoItem.isCompleted,
    });
  };
  const toggleEditing = (e: any) => {
    setTodoItem({
      ...todoItem,
      isEditing: !todoItem.isEditing,
    });
  };
  const handleChange = (e: any) => {
    setTodoItem({ ...todoItem, user_input: e.target.value });
  };
  const handleCancel = (e: any) => {
    setTodoItem({
      ...todoItem,
      user_input: todoItem.content,
      isEditing: false,
    });
  };
  const handleEdit = (e: any) => {
    updateTodo(id, todoItem.user_input, todoItem.isCompleted);
    setTodoItem({
      ...todoItem,
      content: todoItem.user_input,
      isEditing: false,
    });
  };
  const handleRemove = (e: any) => {
    deleteTodo(id);
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

export default TodoItem;
