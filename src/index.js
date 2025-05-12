import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';  // Import Provider
import App from './App';
import store from './redux/store';  // Import your store

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>  {/* Wrap with Provider */}
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
