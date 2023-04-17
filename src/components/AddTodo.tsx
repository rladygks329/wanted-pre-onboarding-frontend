import { FormEvent } from 'react';
import useInput from '../hooks/useInput';
import { useTodo } from '../contexts/TodoContext';
import { useDispatch } from 'react-redux';
import { addTodo } from '../reudx/actions';
import styled from 'styled-components';
import { GrAdd } from 'react-icons/gr';

const AddTodo = () => {
  const [content, setContent, resetContent] = useInput('');
  const dispatch = useDispatch();
  const { createTodo } = useTodo();

  const handleSubmit = (event: FormEvent) => {
    const target = event.target as HTMLFormElement;

    event.preventDefault();
    if (content.length === 0) {
      alert('내용이 비어 있어요!');
      return;
    }

    createTodo(content).then((newTodo) => {
      dispatch(addTodo(newTodo));
    });
    resetContent();
  };

  return (
    <AddTodoWrapper onSubmit={handleSubmit}>
      <InputPrompt
        data-testid='new-todo-input'
        value={content}
        onChange={setContent}
      />
      <AddButton data-testid='new-todo-add-button'>
        <GrAdd />
      </AddButton>
    </AddTodoWrapper>
  );
};

const AddTodoWrapper = styled.form`
  display: flex;
  width: 80%;
`;

const InputPrompt = styled.input`
  flex-grow: 1;
  height: 1.5rem;
  border-radius: 0.5rem;
  font-size: larger;
  padding: 0.5rem;
  margin-right: 0.2rem;
`;

const AddButton = styled.button`
  width: 3rem;
  border-radius: 0.5rem;
`;

export { AddTodo };
