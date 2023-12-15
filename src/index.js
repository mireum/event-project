import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import ScrollToTop from './components/ScrollToTop';
import axios from 'axios';
import { selectId, setUser } from './features/userSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));

if (localStorage.getItem('user')) {
  const user = JSON.parse(localStorage.getItem('user'));
  const id = document.cookie.match('connect.sid').input.split('%')[1].split('.')[0].slice(2);
  const result = await axios.post('http://localhost:8088/user/loginCheck', {id}, {withCredentials: true});
  console.log(result.data);
  store.dispatch(setUser({id: user._id, username: user.username, email: user.email}));
}

root.render(
  <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop/>
        <App />
      </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
