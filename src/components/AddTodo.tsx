import { FormEvent } from 'react';
import useInput from '../hooks/useInput';
import { useTodo } from '../contexts/TodoContext';
import { useDispatch } from 'react-redux';
import { addTodo } from '../reudx/actions';

const AddTodo = () => {
  const { data: content, updateData: setContent } = useInput('');
  const dispatch = useDispatch();
  const { createTodo } = useTodo();

  const handleSubmit = (event: FormEvent) => {
    const target = event.target as HTMLFormElement;

    event.preventDefault();
    target.reset();

    createTodo(content).then((newTodo) => {
      dispatch(addTodo(newTodo));
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input data-testid='new-todo-input' onChange={setContent} />
      <button data-testid='new-todo-add-button'>만들기</button>
    </form>
  );
};

export { AddTodo };
