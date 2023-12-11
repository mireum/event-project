import logo from './logo.svg';
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
import axios from 'axios';
import Reserv from './components/pages/Reserv';


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
      const result = await axios.get('http://localhost:8088');
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
          <Route path='/bookmark' element={<BookMark />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/find' element={<FindPage />} />
          <Route index element={<EventList />} />
          <Route path='/detail/:EventListId' element={<Detail />} />
          <Route path='/detail/:EventListId/reserv' element={<Reserv />} />

        </Route>
      </Routes>
    </>
  );
}

export default App;
