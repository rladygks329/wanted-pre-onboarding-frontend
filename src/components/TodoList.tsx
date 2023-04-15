import { useSelector } from 'react-redux';
import { RootState } from '../reudx/reducer';
import TodoItem from './TodoItem';
import styled from 'styled-components';

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos);
  return (
    <Wrapper>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />;
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export { TodoList };
