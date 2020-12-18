import React from 'react';

interface Props {
  todo: Todo;
}
interface Props {
  todo: Todo;
  toggle: Toggle;
}
export const TodoListItem: React.FC<Props> = ({todo, toggle}) => {
  return (
    <li>
      <label
        style={{textDecoration: todo.completed ? 'line-through' : undefined}}
      >
        <input
          type='checkbox'
          onClick={e => {
            toggle(todo);
          }}
          checked={todo.completed}
        />{' '}
        {todo.text}
      </label>
    </li>
  );
};
