import { InitialStateProps, ITodoState, IVerificatedProps } from './@types';

export function verificated({ state, action, callback }: IVerificatedProps) {
  if (!action.payload) {
    return state;
  } else {
    return callback({ state, action });
  }
}

export function addTodo({ state, action }: ITodoState): InitialStateProps {
  const currentState = {
    ...state,
    todos: [
      ...state.todos,
      { id: Date.now().toString(), title: action.payload, completed: false },
    ],
  };

  return currentState as InitialStateProps;
}

export function setCompletedTodo({
  state,
  action,
}: ITodoState): InitialStateProps {
  const currentState = {
    ...state,
    todos: state.todos.map((todo) => {
      if (todo.id === action.payload) {
        return { ...todo, completed: !todo.completed };
      }

      return todo;
    }),
  };

  return currentState;
}

export function removeTodo({ state, action }: ITodoState): InitialStateProps {
  const currentState = {
    ...state,
    todos: state.todos.filter((todo) => todo.id !== action.payload),
  };

  return currentState;
}

export function setFilter({ state, action }: ITodoState): InitialStateProps {
  return { ...state, filter: action.filter || '' };
}
