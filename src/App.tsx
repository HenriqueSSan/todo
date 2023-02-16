import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header';
import { ITodoActionProps } from './store/@types';

function TodoList() {
  const dispatch = useDispatch();

  const { todos, filter } = useSelector(
    (initialState: any) => initialState.todos,
  );

  function handleSetCompletedTodo(todo: any) {
    dispatch({ type: 'SET_COMPLETED_TODO', payload: todo.id });
  }

  function handleRemoveTodo(todo: any) {
    dispatch({ type: 'REMOVE_TODO', payload: todo.id });
  }

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'COMPLETE':
        return todos.filter((todo) => todo.completed);
      case 'INCOMPLETE':
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  function handleSetFilter({ filter }: Pick<ITodoActionProps, 'filter'>) {
    dispatch({ type: 'FILTER_TODO', filter });
  }

  return (
    <div>
      {filteredTodos.map((todo: any) => (
        <li
          key={todo.id}
          onClick={() => {
            handleSetCompletedTodo(todo);
            console.log(todos);
          }}
        >
          <span> {todo.completed ? '+' : '-'} </span>
          {todo.title}

          <button type="button" onClick={() => handleRemoveTodo(todo)}>
            X
          </button>
        </li>
      ))}

      <p>{filteredTodos.length}</p>

      <button
        type="button"
        onClick={() => {
          handleSetFilter({ filter: 'ALL' });
        }}
      >
        ALL
      </button>

      <button
        type="button"
        onClick={() => {
          handleSetFilter({ filter: 'COMPLETE' });
        }}
      >
        COMPLETE
      </button>

      <button
        type="button"
        onClick={() => {
          handleSetFilter({ filter: 'INCOMPLETE' });
        }}
      >
        INCOMPLETE
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
