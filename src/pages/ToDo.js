import React, { useEffect, useState } from 'react';
import TodoList from '../components/TodoList';
import todoService from '../services/todoService';

const ToDo = () => {
  const [content, setContent] = useState('');
  const [data, setData] = useState([]);
  useEffect(() => {
    todoService.getTodos().then((response) => {
      setData(response.data);
    });
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    todoService.createTodo(content).then((response) => {
      setData([...data, response.data]);
      setContent('');
    });
  };
  const handleRemove = (id) => {
    todoService
      .deleteTodo(id)
      .then(setData(data.filter((todo) => todo.id !== id)));
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
            update={todoService.updateTodo}
            remove={handleRemove}
          />
        );
      })}
    </div>
  );
};
export default ToDo;
