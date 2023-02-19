import { InitialStateProps, ITodoActionProps } from '@/store/@types';
import { useDispatch, useSelector } from 'react-redux';

export interface IControlButtonProps {
  typeTargetFilter: string | 'ALL' | 'COMPLETE' | 'INCOMPLETE';
  text: string;
}

export function $ControlButton({
  typeTargetFilter,
  text,
}: IControlButtonProps) {
  const dispatch = useDispatch();

  const { filter } = useSelector(
    (initialState: { todos: InitialStateProps }) => initialState.todos,
  );

  function handleSetFilter({
    filter: _filter,
  }: Pick<ITodoActionProps, 'filter'>) {
    if (filter !== _filter) {
      dispatch({ type: 'FILTER_TODO', filter: _filter });
    } else {
      return;
    }
  }

  function currentFilterActiveStyle(
    type: string | 'ALL' | 'COMPLETE' | 'INCOMPLETE',
  ): string {
    return type === filter
      ? 'text-primary hover:text-secondary transition duration-300 ease-in cursor-not-allowed'
      : 'text-light-gray-400 transition duration-300 ease-in hover:text-light-gray-500 dark:text-dark-gray-400 dark:hover:text-dark-gray-200';
  }

  return (
    <button
      type="button"
      className={`${currentFilterActiveStyle(typeTargetFilter)}`}
      onClick={() => handleSetFilter({ filter: typeTargetFilter })}
    >
      {text}
    </button>
  );
}
