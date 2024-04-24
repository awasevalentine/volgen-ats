import React from 'react'
import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify';

import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './lib/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    <ToastContainer />
    </Provider>

  </React.StrictMode>,
)
