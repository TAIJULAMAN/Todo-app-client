import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
import { Provider } from 'react-redux';
import App from './App';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>
//   },
// ]);
import store from './redux/store';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
  <App />
  </React.StrictMode>
  </Provider>
)
