import { configureStore } from '@reduxjs/toolkit';

import { InitialStateProps, ITodoActionProps } from './@types';
import {
  addTodo,
  removeTodo,
  setCompletedTodo,
  setFilter,
  verificated,
} from './todoCases';

export const initalState: InitialStateProps = {
  todos: [],
  filter: '',
};

function todoReducer(
  state = initalState,
  action: ITodoActionProps,
): InitialStateProps {
  switch (action.type) {
    case 'ADD_TODO':
      return verificated({ state, action, callback: addTodo });
    case 'SET_COMPLETED_TODO':
      return verificated({ state, action, callback: setCompletedTodo });
    case 'REMOVE_TODO':
      return verificated({ state, action, callback: removeTodo });
    case 'FILTER_TODO':
      return setFilter({ state, action });
    default:
      return state;
  }
}

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
