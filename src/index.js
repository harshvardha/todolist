import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TodoListProvider } from "./context/TodoListContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <TodoListProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TodoListProvider>
);