//Import React
import React from 'react';
//Import React DOM (Document Object Model)
import ReactDOM from 'react-dom/client';
//Import CSS (Cascading Style Sheets)
import './index.css';
//Import the function component "App"
import App from './App';
//Create a variable of type object that represents the HTML (Hyper Text Markup Language) root of the application
const root = ReactDOM.createRoot(document.getElementById('root'));
//Call the "render" method of the "root" object
root.render(
  //Use strict mode
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
