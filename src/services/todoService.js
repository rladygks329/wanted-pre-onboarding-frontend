import axiosAPI from './axiosAPI';

const todoService = {
  createTodo: (todo) => {
    return axiosAPI.post('/todos', { todo });
  },
  getTodos: () => {
    return axiosAPI.get('/todos');
  },
  updateTodo: (id, todo, isCompleted) => {
    return axiosAPI.put(`/todos/${id}`, { todo, isCompleted });
  },
  deleteTodo: (id) => {
    return axiosAPI.delete(`/todos/${id}`);
  },
};

export default todoService;
