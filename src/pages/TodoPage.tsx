import { FormEvent, useEffect, useState } from 'react';
import { useTodo } from '../contexts/TodoContext';
import TodoItem from '../components/TodoItem';
import { Todo } from '../types/Todo';
import useInput from '../hooks/useInput';

const TodoPage = () => {
  const { data: content, updateData: setContent } = useInput('');
  const [data, setData] = useState<Todo[]>([]);
  const { getTodos, createTodo } = useTodo();

  useEffect(() => {
    getTodos().then((data) => {
      setData(data);
    });
  }, []);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    createTodo(content).then((newTodo) => {
      setData([...data, newTodo]);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input data-testid='new-todo-input' onChange={setContent} />
        <button data-testid='new-todo-add-button'>만들기</button>
      </form>
      {data.map((todoItem) => {
        return <TodoItem key={todoItem.id} data={todoItem} />;
      })}
    </div>
  );
};

export default TodoPage;
