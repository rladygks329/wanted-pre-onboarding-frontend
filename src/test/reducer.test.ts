import { reducer } from '../reudx/reducer';
import { Todo } from '../types/Todo';
import { addTodo, deleteTodo, updateTodo, setTodo } from '../reudx/actions';

test('reducer', () => {
  let todoState: { todos: Todo[] } = { todos: [] };

  const todo1: Todo = {
    id: 1,
    isCompleted: false,
    todo: '밥먹기',
    userId: 123,
  };

  const todo2: Todo = {
    id: 2,
    isCompleted: true,
    todo: '설겆이하기',
    userId: 123,
  };

  const todo3: Todo = {
    id: 3,
    isCompleted: false,
    todo: '숙제하기',
    userId: 123,
  };

  //add
  todoState = reducer(todoState, addTodo(todo1));
  expect(todoState.todos.length).toBe(1);
  expect(todoState.todos[0]).toEqual(todo1);

  todoState = reducer(todoState, addTodo(todo2));
  expect(todoState.todos.length).toBe(2);
  expect(todoState.todos[1]).toEqual(todo2);

  todoState = reducer(todoState, addTodo(todo3));
  expect(todoState.todos.length).toBe(3);
  expect(todoState.todos[2]).toEqual(todo3);

  //update
  const updateString = 'changed';
  todoState = reducer(todoState, updateTodo({ ...todo1, todo: updateString }));
  expect(todoState.todos[0].todo).toBe(updateString);

  //delete
  const deleteID = 1;
  todoState = reducer(todoState, deleteTodo(deleteID));
  expect(todoState.todos.length).toBe(2);
  expect(todoState.todos[0].id).not.toBe(deleteID);

  //set
  todoState = reducer(todoState, setTodo([todo1, todo3]));
  expect(todoState.todos[0]).toEqual(todo1);
  expect(todoState.todos[1]).toEqual(todo3);
});
