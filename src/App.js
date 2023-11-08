import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import styled, { createGlobalStyle } from "styled-components";
import { Route, Routes } from 'react-router-dom';
import FestivalList from './components/list/EventList';
import Map from './components/detail/Map';
import { getEventItem } from './api/eventAPI';
import MainDetailSearch from './components/MainDetailSearch';



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
        <Route index element={<FestivalList />} />
        <Route path='/detail/:EventListId' element={<Map />} />
    
        {/* 이 안에 Route 작성 */}
        <Route path='/' element={<MainDetailSearch />} />
      </Routes>
    </>
  );
}

export default App;
