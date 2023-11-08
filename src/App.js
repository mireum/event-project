import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import styled, { createGlobalStyle } from "styled-components";
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { getEventItem } from './api/eventAPI';
import FestivalList from './components/list/EventList';
import Map from './components/detail/Map';
import Detail from './components/detail/Detail';



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
          <Route index element={<FestivalList />} />
          <Route path='/detail/:EventListId' element={<Detail />} />
    

        </Route>

      </Routes>
    </>
  );
}

export default App;
