/* Creating a root element and rendering the App component into it. */
/* Importing the React library. */
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';


createRoot(document.getElementById('root')).render(<App/>)
