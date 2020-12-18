interface Todo {
  text: string;
  completed: boolean;
}
type Toggle = (todo: Todo) => void;
type addTodos = (todo: Todo) => void;
type handleClick = (todo: Todo) => void;
type onClick = (value) => void;
