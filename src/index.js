import React from 'react';
import ReactDOM from 'react-dom/client'; // Змінивши імпорт тут
import App from './components/App'; 
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
