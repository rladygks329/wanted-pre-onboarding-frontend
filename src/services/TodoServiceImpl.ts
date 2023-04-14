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
      .then((response) => {
        return response.json();
      });
  }

  async createTodo(todo: string): Promise<Todo> {
    return this.httpClient
      .fetch('/todos', {
        method: 'POST',
        body: JSON.stringify({ todo }),
      })
      .then((response) => {
        return response.json();
      });
  }

  async deleteTodo(id: number): Promise<void> {
    return this.httpClient
      .fetch(`/todos${id}`, { method: 'DELETE' })
      .then((response) => {
        return;
      });
  }

  async updateTodo(
    id: number,
    todo: string,
    isCompleted: boolean
  ): Promise<Todo> {
    return this.httpClient
      .fetch(`/todos${id}`, { todo, isCompleted })
      .then((response) => {
        return response.json();
      });
  }
}

export { TodoServiceImpl };
