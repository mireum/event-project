import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import styled, { createGlobalStyle } from "styled-components";
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { getEventItem, getEventList } from './api/eventAPI';
import EventList from './components/list/EventList';
import Map from './components/detail/Map';
import Detail from './components/detail/Detail';
import BookMark from './components/BookMark';
import axios from 'axios';
import { useEffect } from 'react';
import AsNavFor from './components/list/mainSlide';



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

  console.log(getEventItem);

  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route path='/' element={<Header />}>
          <Route path='/bk' element={<BookMark />} />
          <Route index element={<EventList />} />
          <Route path='/detail/:EventListId' element={<Detail />} />

        </Route>

      </Routes>
    </>
  );
}

export default App;
