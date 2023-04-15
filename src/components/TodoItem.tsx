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
import styled from 'styled-components';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdSend, MdCancel } from 'react-icons/md';

const TodoItem = React.memo((props: Todo) => {
  const { id, todo, isCompleted } = props;
  const { updateTodo, deleteTodo } = useTodo();
  const dispatch = useDispatch();

  const [input, setInput] = useInput(todo);
  const [isEditing, toggleIsEditting] = useToggle(false);

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
    <Li>
      <Label>
        <CheckBox
          type='checkbox'
          checked={isCompleted}
          onChange={toggleComplete}
        />
      </Label>
      {isEditing ? (
        <>
          <Input data-testid='modify-input' value={input} onChange={setInput} />
          <ButtonWrapper>
            <IconButton data-testid='submit-button' onClick={handleEdit}>
              <MdSend size={'1.5em'} />
            </IconButton>
            <IconButton data-testid='cancel-button' onClick={handleCancel}>
              <MdCancel size={'1.5em'} />
            </IconButton>
          </ButtonWrapper>
        </>
      ) : (
        <>
          <ContentWrapper>{todo}</ContentWrapper>
          <ButtonWrapper>
            <IconButton data-testid='modify-button' onClick={toggleIsEditting}>
              <AiFillEdit size={'1.5em'} />
            </IconButton>
            <IconButton data-testid='delete-button' onClick={handleRemove}>
              <AiFillDelete size={'1.5em'} />
            </IconButton>
          </ButtonWrapper>
        </>
      )}
    </Li>
  );
});

const Li = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  list-style: none;
`;

const Label = styled.label``;

const CheckBox = styled.input`
  zoom: 2;
`;

const Input = styled.input`
  flex-grow: 1;
  font-size: 1.5rem;
  margin: 0 0.2rem;
  border-radius: 0.5rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  font-size: 1.5rem;
`;

const ButtonWrapper = styled.div``;

const IconButton = styled.span`
  margin: 0.5rem;
`;

export default TodoItem;
