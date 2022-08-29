import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { SearchContextProvider } from './context/searchContext/searchContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchContextProvider>
      <App />
    </SearchContextProvider>
  </React.StrictMode>
);
