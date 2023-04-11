import { Todo } from './Todo';
import HttpClient from './HttpClient';

interface TodoService {
  httpClient: HttpClient;

  createTodo(todo: string): Promise<Todo>;
  getTodos(): Promise<Todo[]>;
  updateTodo(id: number, todo: String, isCompleted: boolean): Promise<Todo>;
  deleteTodo(id: number): Promise<void>;
}

export default TodoService;
