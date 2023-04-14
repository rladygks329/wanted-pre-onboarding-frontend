import { useSelector } from 'react-redux';
import { RootState } from '../reudx/reducer';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todos);
  return (
    <div>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} {...todo} />;
      })}
    </div>
  );
};

export { TodoList };
