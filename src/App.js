import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from "styled-components";
import { Route, Routes, useParams } from 'react-router-dom';
import Header from './components/Header';
import EventList from './components/list/EventList';
import Detail from './components/detail/Detail';
import BookMark from './components/BookMark';
import Calendar from './components/pages/Calendar';
import FindPage from './components/FindPage';
import Register from './components/pages/Register';
import axios from 'axios';
import Reserv from './components/pages/Reserv';
import Login from './components/Login';
import Board from './components/Board';
import { useSelector } from 'react-redux';
import { selectId, selectUsername } from './features/userSlice';
import BoardList from './components/BoardList';
import BoardListPage from './components/BoardListPage';
import RequireAuth from './auth/RequireAuth';
import ReservInfo from './components/pages/ReservInfo';
import Profile from './components/Profile';
import ProfilePw from './components/ProfilePw';


const GlobalStyle = createGlobalStyle`
  /* 글로벌 스타일 */
  body {
    box-sizing:  border-box;
  }

  * {
    box-sizing: inherit;

  }

  .cursor-pointer {
    cursor: pointer;
  }
`;
function App() {

  useEffect(() => {
    try {
      const festival = async () => {
      const result = await axios.get('http://localhost:8088', {withCredentials: true});
      }
      festival();
    } catch (err) {
      console.error(err);
    }
  });

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Header />}>
          <Route path='/login' element={<Login />} />
          <Route path='/profile' 
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            } />
          <Route path='/profilePw' 
            element={
              <RequireAuth>
                <ProfilePw />
              </RequireAuth>
            } />
          <Route path='/bookmark' element={<BookMark />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/find' element={<FindPage />} />
          <Route index element={<EventList />} />
          <Route path='/detail/:EventListId' element={<Detail />} />
          <Route 
            path='/detail/:EventListId/reserv' 
            element={
              <RequireAuth>
                <Reserv />
              </RequireAuth>
            } />
          <Route 
            path='/profile/reserv/info' 
            element={
              <RequireAuth>
                <ReservInfo />
              </RequireAuth>
            } />
          <Route path='/register' element={<Register />} />
          <Route path='/board' element={<Board />} />
          <Route path='/board/list' element={<BoardList />} />
          <Route path='/board/listpage' element={<BoardListPage />} />



        </Route>
      </Routes>
    </>
  );
}

export default App;
