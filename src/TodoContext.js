import React, { useReducer, createContext } from 'react';

export default function TodoProvider({ children }) {
  const todos = [
    {
      id: 1,
      item: '밥먹깅',
      done: false,
    },
    {
      id: 2,
      item: '2222밥먹깅',
      done: true,
    },
    {
      id: 3,
      item: '33333밥먹깅',
      done: true,
    },
    {
      id: 4,
      item: '4444밥먹깅',
      done: false,
    },
  ];

  function todoReducer(state, action) {
    switch (action.type) {
      case 'CREATE':
        return state.concat(action.todo);
      case 'TOGGLE':
        return state.map((todo) => (todo.id === action.id ? { ...todo, done: !todo.done } : todo));
      case 'REMOVE':
        return state.filter((todo) => todo.id !== action.id);
      default:
        throw new Error(`Unhandled action type: ${action.type}`);
    }
  }

  const TodoStateContext = createContext();
  const TodoDispatchContext = createContext();

  const [state, dispatch] = useReducer(todoReducer, todos);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>{children}</TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}
