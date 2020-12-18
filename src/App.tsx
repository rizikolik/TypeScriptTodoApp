import React, {useState} from 'react';
import {TodoListItem} from './components/todo/index';
function App() {
  const initialTodos: Todo[] = [
    {
      text: 'Walk the dog',
      completed: false,
    },
    {
      text: 'Write app',
      completed: true,
    },
  ];

  const [todos, setTodos] = useState(initialTodos);
  const [currentTodo, setCurrentTodo] = useState<Todo>();
  function addTodos(todo: Todo) {
    setTodos(todos => [...todos, todo]);
  }
  const toggle = (todo: Todo) => {
    const newTodos = todos.map(item => {
      if (todo === item) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    });
    return setTodos(newTodos);
  };
  return (
    <div className='App'>
      <React.Fragment>
        {todos.map(todo => {
          return <TodoListItem todo={todo} toggle={toggle} />;
        })}

        <input
          name='name'
          type='text'
          onChange={e =>
            setCurrentTodo({text: e.target.value, completed: false})
          }
        />
        <button
          onClick={() => {
            console.log(currentTodo);
            return currentTodo ? addTodos(currentTodo) : '';
          }}
        >
          AddTodo
        </button>
      </React.Fragment>
    </div>
  );
}

export default App;
