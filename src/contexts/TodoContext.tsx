import { createContext, useContext } from 'react';
import TodoService from '../types/TodoService';
import { Todo } from '../types/Todo';

const defaultTodo: Todo = {
  id: 1,
  todo: '123',
  isCompleted: false,
  userId: -1,
};

const TodoContext = createContext({
  createTodo: async (s: string): Promise<Todo> => {
    return defaultTodo;
  },
  getTodos: async (): Promise<Todo[]> => {
    return [];
  },
  deleteTodo: async (id: number): Promise<void> => {
    return;
  },
  updateTodo: async (
    id: number,
    todo: String,
    isCompleted: boolean
  ): Promise<Todo> => {
    return defaultTodo;
  },
});

export const useTodo = () => useContext(TodoContext);

export function TodoProvider({
  children,
  todoService,
}: {
  children: React.ReactNode;
  todoService: TodoService;
}) {
  const createTodo = todoService.createTodo.bind(todoService);
  const getTodos = todoService.getTodos.bind(todoService);
  const deleteTodo = todoService.deleteTodo.bind(todoService);
  const updateTodo = todoService.updateTodo.bind(todoService);

  return (
    <TodoContext.Provider
      value={{ createTodo, getTodos, deleteTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
