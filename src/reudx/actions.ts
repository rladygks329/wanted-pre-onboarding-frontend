import { Todo } from '../types/Todo';

export const ADD = 'TODO/ADD';
export const DELETE = 'TODO/DELETE';
export const UPDATE = 'TODO/UPDATE';
export const SET = 'TODO/SET';
export type actionType = addAction | deleteAction | updateAction | setAction;
export type addAction = {
  type: typeof ADD;
  todo: Todo;
};

export type deleteAction = {
  type: typeof DELETE;
  id: number;
};

export type updateAction = {
  type: typeof UPDATE;
  todo: Todo;
};

export type setAction = {
  type: typeof SET;
  todos: Todo[];
};

export const addTodo = (todo: Todo): addAction => {
  return {
    type: ADD,
    todo,
  };
};

export const deleteTodo = (id: number): deleteAction => {
  return {
    type: DELETE,
    id,
  };
};

export const updateTodo = (todo: Todo): updateAction => {
  return {
    type: UPDATE,
    todo,
  };
};

export const setTodo = (todos: Todo[]): setAction => {
  return { type: SET, todos };
};
