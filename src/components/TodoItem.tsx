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
            <button data-testid='submit-button' onClick={handleEdit}>
              제출
            </button>
            <button data-testid='cancel-button' onClick={handleCancel}>
              취소
            </button>
          </ButtonWrapper>
        </>
      ) : (
        <>
          <ContentWrapper>{todo}</ContentWrapper>
          <ButtonWrapper>
            <EditButton data-testid='modify-button' onClick={toggleIsEditting}>
              <AiFillEdit size={'1.5em'} />
            </EditButton>
            <DeleteButton data-testid='delete-button' onClick={handleRemove}>
              <AiFillDelete size={'1.5em'} />
            </DeleteButton>
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

const ButtonWrapper = styled.div`
  display: inline-block;
`;

const EditButton = styled.span`
  margin: 0.5rem;
`;
const DeleteButton = styled.span``;

export default TodoItem;
