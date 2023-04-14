import React from 'react';
import { useTodo } from '../contexts/TodoContext';
import { Todo } from '../types/Todo';
import useToggle from '../hooks/useToggle';
import useInput from '../hooks/useInput';
import { useDispatch } from 'react-redux';
import {
  updateTodo as reduxUpdate,
  deleteTodo as reduxDelete,
} from '../reudx/actions';

const TodoItem = React.memo((props: Todo) => {
  const { id, todo, isCompleted } = props;
  const { updateTodo, deleteTodo } = useTodo();
  const dispatch = useDispatch();

  const { data: input, updateData: setInput } = useInput(todo);
  const { data: isEditing, toggleData: toggleIsEditting } = useToggle(false);

  const toggleComplete = (e: any) => {
    updateTodo(id, input, !isCompleted).then((todo) => {
      dispatch(reduxUpdate(todo));
    });
  };

  const handleEdit = (e: any) => {
    if (input.length === 0) {
      alert('내용이 비어있어요!');
      return;
    }
    updateTodo(id, input, isCompleted).then((todo) => {
      dispatch(reduxUpdate(todo));
    });
    toggleIsEditting();
  };

  const handleRemove = (e: any) => {
    deleteTodo(id).then(() => {
      dispatch(reduxDelete(id));
    });
  };
  const handleCancel = (e: any) => {
    toggleIsEditting();
  };

  return (
    <li>
      <label>
        <input
          type='checkbox'
          checked={isCompleted}
          onChange={toggleComplete}
        />
      </label>
      {isEditing ? (
        <>
          <input data-testid='modify-input' value={input} onChange={setInput} />
          <button data-testid='submit-button' onClick={handleEdit}>
            제출
          </button>
          <button data-testid='cancel-button' onClick={handleCancel}>
            취소
          </button>
        </>
      ) : (
        <>
          <span>{todo}</span>
          <button data-testid='modify-button' onClick={toggleIsEditting}>
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
