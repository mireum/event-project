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
// import persistStore from 'redux-persist/es/persistStore';
// import { PersistGate } from 'redux-persist/integration/react';

// export let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));

if (document.cookie.match('connect.sid')) {
  console.log(document.cookie.match('connect.sid'));
  const id = document.cookie.match('connect.sid').input.split('%')[1].split('.')[0].slice(2);
    try {
    const userData = await axios.post('http://localhost:8088/user/loginCheck', {id}, {withCredentials: true});
    console.log('새로고침:', userData);
    const info = userData.data.user;
    console.log(info);
    const objt = {id: info, username: 'name'}
    store.dispatch(setUser(objt));
    store.getState(selectId);
  } catch (err) {
    console.error(err);
  };
}


root.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
      <BrowserRouter>
        <ScrollToTop/>
        <App />
      </BrowserRouter>
    {/* </PersistGate> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
