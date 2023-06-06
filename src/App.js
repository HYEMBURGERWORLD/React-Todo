import './App.css';
import { createGlobalStyle } from 'styled-components';
import TodoTemplet from './components/TodoTemplet';
import TodoToday from './components/TodoToday';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';

function App() {
  // global style
  const GlobalStyle = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    body {
      height: 100vh;
      font-family: sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: whitesmoke;
    }

    .icon { 
      cursor: pointer;
      transition: all .6s;
      &:hover {
        color: #5f3dc4;
      }
    }
  `;

  return (
    <div>
      <GlobalStyle />
      <TodoTemplet>
        {/* date & todo num */}
        <TodoToday />
        {/* todo list */}
        <TodoList />
        {/* create todo */}
        <TodoCreate />
      </TodoTemplet>
    </div>
  );
}

export default App;
