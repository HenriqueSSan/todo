import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  dispatch({ type: 'ADD_TODO', payload: 'OKOOOKO' });

  const { todos } = useSelector((initialState: any) => initialState.todos);

  console.log(todos);

  return (
    <div>
      {todos.map((todo: any) => (
        <li>{todo.title}</li>
      ))}
    </div>
  );
}

export default App;
