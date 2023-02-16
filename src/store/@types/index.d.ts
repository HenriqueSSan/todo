export interface ITodoProps {
  id: string;
  title: string;
  completed: boolean;
  slug?: string;
}

export interface InitialStateProps {
  todos: ITodoProps[];
  filter: string | '';
}

export interface ITodoActionProps {
  type: string;
  payload?: string | '';
  filter?: string | 'ALL' | 'COMPLETE' | 'INCOMPLETE' | '';
}

export interface ITodoState {
  state: InitialStateProps;
  action: ITodoActionProps;
}

export interface IVerificatedProps extends ITodoState {
  callback: ({ state, action }: ITodoState) => InitialStateProps;
}
