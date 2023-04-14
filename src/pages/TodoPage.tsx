import { useEffect, useState } from 'react';
import { useTodo } from '../contexts/TodoContext';
import TodoItem from '../components/TodoItem';
import { Todo } from '../types/Todo';
import { AddTodo } from '../components/AddTodo';

const TodoPage = () => {
  const [data, setData] = useState<Todo[]>([]);
  const { getTodos } = useTodo();

  useEffect(() => {
    getTodos().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div>
      <AddTodo />
      {data.map((todoItem) => {
        return <TodoItem key={todoItem.id} data={todoItem} />;
      })}
    </div>
  );
};

export default TodoPage;
