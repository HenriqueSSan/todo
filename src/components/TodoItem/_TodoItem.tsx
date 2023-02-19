import { useDispatch } from 'react-redux';

import crossXIcon from './assets/icon-cross.svg';
import checkIcon from './assets/icon-check.svg';
import { ITodoProps } from '@/store/@types';

interface ITodoItemProps extends ITodoProps {
  className: string;
}

export function TodoItem({ id, title, completed, className }: ITodoItemProps) {
  const dispatch = useDispatch();

  function handleClickSetCompleted(todoId: string) {
    dispatch({ type: 'SET_COMPLETED_TODO', payload: todoId });
  }
  function handleClickRemove(todoId: string) {
    dispatch({ type: 'REMOVE_TODO', payload: todoId });
  }

  return (
    <li
      className={`${className} flex h-[64px] items-center gap-x-4 bg-light-gray-100 px-4 dark:bg-dark-gray-600`}
    >
      <div
        className={`flex h-[36px] w-[36px] items-center justify-center rounded-full border border-solid border-light-gray-400 dark:border-dark-gray-400 ${
          completed ? 'bg-gradient-primary' : ''
        }`}
        role="button"
        onClick={() => handleClickSetCompleted(id)}
      >
        {completed ? (
          <img src={checkIcon} alt="Cross for remove Todo Item" />
        ) : undefined}
      </div>

      <div className="flex grow items-center justify-between">
        <p
          className={
            completed
              ? 'text-light-gray-400 line-through dark:text-dark-gray-400'
              : 'text-light-gray-500 dark:text-dark-gray-100'
          }
        >
          {title}
        </p>
        <button
          className="flex h-[36px] w-[36px] items-center justify-center"
          type="button"
          onClick={() => handleClickRemove(id)}
        >
          <img src={crossXIcon} alt="Cross for remove Todo Item" />
        </button>
      </div>
    </li>
  );
}
