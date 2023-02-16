import { configureStore } from '@reduxjs/toolkit';

interface ITodoProps {
  id: number;
  title: string;
  completed: boolean;
  slug?: string;
}

interface InitialStateProps {
  todos: ITodoProps[];
}

export const initalState: InitialStateProps = {
  todos: [],
};

export interface ITodoActionProps {
  type: string;
  payload?: string | '';
}

export interface ITodoState {
  state: InitialStateProps;
  action: ITodoActionProps;
}

function addTodo({ state, action }: ITodoState): InitialStateProps {
  if (!action.payload) {
    return state;
  }

  const currentState = {
    ...state,
    todos: [
      ...state.todos,
      { id: Date.now(), title: action.payload, completed: false },
    ],
  };

  return currentState;
}

function todoReducer(
  state = initalState,
  action: ITodoActionProps,
): InitialStateProps {
  switch (action.type) {
    case 'ADD_TODO':
      return addTodo({ state, action });
    default:
      return state;
  }
}

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
