import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTodo } from '../contexts/TodoContext';

import { AddTodo } from '../components/AddTodo';
import { TodoList } from '../components/TodoList';
import { useDispatch } from 'react-redux';
import { setTodo } from '../reudx/actions';

const TodoPage = () => {
  const navigate = useNavigate();
  const { getTodos } = useTodo();
  const dispatch = useDispatch();

  useEffect(() => {
    getTodos()
      .then((data) => {
        dispatch(setTodo(data));
      })
      .catch((e) => {
        if (e.statusCode === 401) {
          localStorage.clear();
          navigate('/signin');
        }
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
