import { Todo } from '../types/Todo';
import HttpClient from '../types/HttpClient';
import TodoService from '../types/TodoService';

class TodoServiceImpl implements TodoService {
  httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  async getTodos(): Promise<Todo[]> {
    const response = await this.httpClient.fetch('/todos', { method: 'GET' });
    const data = await response.json();

    if (!response.ok) {
      this.httpClient.tokenRepo.clear();
      window.location.reload();
      throw data;
    }
    return data;
  }

  async createTodo(todo: string): Promise<Todo> {
    const response = await this.httpClient.fetch('/todos', {
      method: 'POST',
      body: JSON.stringify({ todo }),
    });
    const data = await response.json();

    if (!response.ok) {
      this.httpClient.tokenRepo.clear();
      window.location.reload();
      throw data;
    }
    return data;
  }

  async deleteTodo(id: number): Promise<void> {
    const response = await this.httpClient.fetch(`/todos/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      this.httpClient.tokenRepo.clear();
      window.location.reload();
      throw response;
    }
    return;
  }

  async updateTodo(
    id: number,
    todo: string,
    isCompleted: boolean
  ): Promise<Todo> {
    const response = await this.httpClient.fetch(`/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ todo, isCompleted }),
    });

    const data = await response.json();
    if (!response.ok) {
      this.httpClient.tokenRepo.clear();
      window.location.reload();
      throw data;
    }
    return data;
  }
}

export { TodoServiceImpl };
