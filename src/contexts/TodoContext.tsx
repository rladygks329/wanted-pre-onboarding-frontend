import { createContext, useContext } from 'react';
import TodoService from '../types/TodoService';

const TodoContext = createContext({});

export const useTodo = () => useContext(TodoContext);

export function TodoProvider({
  children,
  todoService,
}: {
  children: React.ReactNode;
  todoService: TodoService;
}) {
  const addTodo = todoService.createTodo.bind(todoService);
  const getTodos = todoService.getTodos.bind(todoService);
  const deleteTodo = todoService.deleteTodo.bind(todoService);
  const updateTodo = todoService.updateTodo.bind(todoService);

  return (
    <TodoContext.Provider value={{ addTodo, getTodos, deleteTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
