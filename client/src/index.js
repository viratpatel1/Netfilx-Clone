import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { AuthContextProvider } from './Context/AuthContext/AuthContext';
import { MovieContextProvider } from './Context/MovieContext/MovieContext';
import { ListContextProvider } from './Context/ListContext/ListContext';
import { AuthContextsProvider } from './AuthContext/AuthContext';


ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MovieContextProvider>
        <ListContextProvider>
          <AuthContextsProvider>
            <App />
          </AuthContextsProvider>
        </ListContextProvider>
      </MovieContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

