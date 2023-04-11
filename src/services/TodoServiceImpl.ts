import { Todo } from '../types/Todo';
import HttpClient from '../types/HttpClient';
import TodoService from '../types/TodoService';

class TodoServiceImpl implements TodoService {
  httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async getTodos(): Promise<Todo[]> {
    return this.httpClient
      .fetch('/todos', {
        method: 'GET',
      })
      .then((todos: Todo[]) => {
        return todos;
      });
  }

  async createTodo(todo: string): Promise<Todo> {
    return this.httpClient
      .fetch('/todos', {
        method: 'POST',
        body: JSON.stringify({ todo }),
      })
      .then((todo: Todo) => {
        return todo;
      });
  }

  async deleteTodo(id: number): Promise<void> {
    return this.httpClient.fetch(`/todos${id}`, { method: 'DELETE' });
  }

  async updateTodo(
    id: number,
    todo: string,
    isCompleted: boolean
  ): Promise<Todo> {
    return this.httpClient
      .fetch(`/todos${id}`, { todo, isCompleted })
      .then((Todo: Todo) => {
        return Todo;
      });
  }
}

export { TodoServiceImpl };
