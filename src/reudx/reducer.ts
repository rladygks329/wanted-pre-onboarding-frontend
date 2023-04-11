import { Todo } from '../types/Todo';
import { ADD, DELETE, UPDATE, SET, actionType } from './actions';

const initialState: { todos: Todo[] } = {
  todos: [],
};

export const reducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case ADD: {
      return {
        todos: [...state.todos, action.todo],
      };
    }

    case UPDATE: {
      const { id } = action.todo;
      return {
        todos: state.todos.map((todo) => (id === todo.id ? action.todo : todo)),
      };
    }

    case DELETE: {
      const { id } = action;
      return {
        todos: state.todos.filter((todo) => todo.id !== id),
      };
    }

    case SET: {
      return {
        todos: action.todos,
      };
    }

    default: {
      return initialState;
    }
  }
};
