import { useEffect } from 'react';

import { useTodo } from '../contexts/TodoContext';
import { AddTodo } from '../components/AddTodo';
import { TodoList } from '../components/TodoList';
import { useDispatch } from 'react-redux';
import { setTodo } from '../reudx/actions';

const TodoPage = () => {
  const { getTodos } = useTodo();
  const dispatch = useDispatch();

  useEffect(() => {
    getTodos().then((data) => {
      dispatch(setTodo(data));
    });
  }, []);

  return (
    <>
      <AddTodo />
      <TodoList />
    </>
  );
};

export default TodoPage;
