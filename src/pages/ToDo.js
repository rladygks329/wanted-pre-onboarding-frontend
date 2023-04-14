import { useEffect, useState } from 'react';
import TodoList from '../components/TodoList';
import { useTodo } from '../contexts/TodoContext';

const ToDo = () => {
  const [content, setContent] = useState('');
  const [data, setData] = useState([]);
  const { getTodos, updateTodo, deleteTodo, createTodo } = useTodo();

  useEffect(() => {
    getTodos().then((data) => {
      setData(data);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    createTodo(content).then((response) => {
      setData([...data, response.data]);
      setContent('');
    });
  };

  const handleRemove = (id) => {
    deleteTodo(id).then(setData(data.filter((todo) => todo.id !== id)));
  };

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input data-testid='new-todo-input' onChange={handleChange} />
        <button data-testid='new-todo-add-button'>만들기</button>
      </form>
      {data.map((todoItem) => {
        return (
          <TodoList
            key={todoItem.id}
            data={todoItem}
            update={updateTodo}
            remove={handleRemove}
          />
        );
      })}
    </div>
  );
};
export default ToDo;
