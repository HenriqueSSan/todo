import { useMemo } from 'react';
import { useSelector } from 'react-redux';

import { InitialStateProps, ITodoProps } from '@/store/@types';
import { TodoItem } from '../TodoItem';

import { $ControlFilter } from './containers/_Controll';

export function List() {
  const { todos, filter } = useSelector(
    (initialState: { todos: InitialStateProps }) => initialState.todos,
  );

  const filteredTodos = useMemo(() => {
    let _todos;

    switch (filter) {
      case 'COMPLETE':
        _todos = todos.filter((todo: ITodoProps) => todo.completed);
        if (_todos.length > 0) {
          return _todos;
        }

        return todos;

      case 'INCOMPLETE':
        _todos = todos.filter((todo: ITodoProps) => !todo.completed);

        if (_todos.length > 0) {
          return _todos;
        }

        return todos;

      default:
        return todos;
    }
  }, [todos, filter]);

  function FilterListRender() {
    return (
      <ul>
        {filteredTodos.map((todo: ITodoProps) => (
          <TodoItem
            key={todo.id}
            className="border-b border-solid border-light-gray-300  first:rounded-t-[10px] dark:border-dark-gray-400"
            title={todo.title}
            completed={todo.completed}
            id={todo.id}
          />
        ))}
      </ul>
    );
  }

  return (
    <div className="mx-auto -mt-[40px] max-w-[644px] px-6">
      <FilterListRender />
      {todos.length > 0 && <$ControlFilter filteredTodos={filteredTodos} />}
    </div>
  );
}
