import { useDispatch, useSelector } from 'react-redux';

function TodoList() {
  const dispatch = useDispatch();

  const { todos } = useSelector((initialState: any) => initialState.todos);

  function handleSetCompletedTodo(todo: any) {
    dispatch({ type: 'SET_COMPLETED_TODO', payload: todo.id });
  }

  return (
    <div>
      {todos.map((todo: any) => (
        <li
          key={todo.id}
          onClick={() => {
            handleSetCompletedTodo(todo);
          }}
        >
          {todo.title}
        </li>
      ))}
    </div>
  );
}

function App() {
  const dispatch = useDispatch();
  dispatch({ type: 'ADD_TODO', payload: 'OKOOOKO' });

  return (
    <div>
      <TodoList />
    </div>
  );
}

export default App;
