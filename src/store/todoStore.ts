import { configureStore, current } from '@reduxjs/toolkit';

interface ITodoProps {
  id: string;
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
      { id: Date.now().toString(), title: action.payload, completed: false },
    ],
  };

  return currentState;
}

function setCompletedTodo({ state, action }: ITodoState): InitialStateProps {
  if (!action.payload) {
    return state;
  }

  const currentState = {
    ...state,
    todos: state.todos.map((todo) => {
      if (todo.id === action.payload) {
        return { ...todo, completed: !todo.completed };
      }

      return todo;
    }),
  };

  console.log(currentState);

  return currentState;
}

function removeTodo({ state, action }: ITodoState): InitialStateProps {
  if (!action.payload) {
    return state;
  }

  const currentState = {
    ...state,
    todos: state.todos.filter((todo) => todo.id !== action.payload),
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
    case 'SET_COMPLETED_TODO':
      return setCompletedTodo({ state, action });
    case 'REMOVE_TODO':
      return removeTodo({ state, action });
    default:
      return state;
  }
}

export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});
