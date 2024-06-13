import React from 'react';
import ReactDOM from 'react-dom/client'; // Измените импорт на 'react-dom/client'
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './styles/main.scss';

const root = ReactDOM.createRoot(document.getElementById('root')); // Используйте createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
