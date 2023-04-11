import { AxiosPromise } from 'axios';
import axiosAPI from './axiosAPI';
import { Todo } from '../types/Todo';

const todoService = {
  createTodo: (todo: string) => {
    return axiosAPI.post('/todos', { todo });
  },

  getTodos: (): AxiosPromise<Todo[]> => {
    return axiosAPI.get('/todos');
  },

  updateTodo: (id: number, todo: Todo, isCompleted: boolean) => {
    return axiosAPI.put(`/todos/${id}`, { todo, isCompleted });
  },

  deleteTodo: (id: number) => {
    return axiosAPI.delete(`/todos/${id}`);
  },
};

export default todoService;
