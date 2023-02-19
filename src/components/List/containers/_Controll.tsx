import { ITodoProps } from '@/store/@types';
import { useDispatch } from 'react-redux';
import { $ControlButton } from './__ControlButton';

export interface IControlFilterProps {
  filteredTodos: ITodoProps[];
}

export function $ControlFilter({ filteredTodos }: IControlFilterProps) {
  const dispatch = useDispatch();

  function handleClearAll() {
    dispatch({ type: 'CLEAR_COMPLETE_ALL' });
  }

  return (
    <div className="relative flex items-center justify-between rounded-b-[10px] bg-light-gray-100 px-4 py-4 dark:bg-dark-gray-600">
      <p className="cursor-default text-light-gray-400 transition duration-300 ease-in hover:text-light-gray-500 dark:text-dark-gray-400 dark:hover:text-dark-gray-200">
        {filteredTodos.length} items left
      </p>

      <div className="w-100 bottom-0 left-0 right-0 top-0 flex items-center gap-x-5 rounded-md bg-light-gray-100 px-4 dark:bg-dark-gray-600 max-[1024px]:absolute max-[1024px]:translate-y-20 max-[1024px]:justify-center max-[1024px]:py-4">
        <$ControlButton typeTargetFilter={'ALL'} text={'All'} />
        <$ControlButton typeTargetFilter={'COMPLETE'} text={'Completed'} />
        <$ControlButton typeTargetFilter={'INCOMPLETE'} text={'Active'} />
      </div>

      <button
        className="text-light-gray-400 transition duration-300 ease-in hover:text-light-gray-500 dark:text-dark-gray-400 dark:hover:text-dark-gray-200"
        type="button"
        onClick={() => handleClearAll()}
      >
        Clear All
      </button>
    </div>
  );
}
