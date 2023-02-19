import { configureStore } from '@reduxjs/toolkit';

import {
  InitialStateProps,
  ITodoActionProps,
  ITodoProps,
  ITodoState,
} from './@types';
import {
  addTodo,
  removeTodo,
  setCompletedTodo,
  setFilter,
  verificated,
} from './todoCases';

export const initalState: InitialStateProps = {
  todos: [],
  filter: 'ALL',
};

function clearCompleteTodoAll({ state }: Omit<ITodoState, 'action'>) {
  return {
    ...state,
    todos: state.todos.filter((todo: ITodoProps) => !todo.completed),
  };
}

function middleSaveLocalhost({ state }: Omit<ITodoState, 'action'>) {
  localStorage.setItem('data#todos', JSON.stringify(state));
}

function todoReducer(
  state = initalState,
  action: ITodoActionProps,
): InitialStateProps {
  middleSaveLocalhost({ state });

  switch (action.type) {
    case 'ADD_TODO':
      return verificated({
        state,
        action,
        callback: addTodo,
      });
    case 'SET_COMPLETED_TODO':
      return verificated({
        state,
        action,
        callback: setCompletedTodo,
      });
    case 'REMOVE_TODO':
      return verificated({
        state,
        action,
        callback: removeTodo,
      });
    case 'FILTER_TODO':
      return setFilter({ state, action });
    case 'CLEAR_COMPLETE_ALL':
      return clearCompleteTodoAll({ state });
    default:
      return state;
  }
}

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
