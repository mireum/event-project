import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import styled, { createGlobalStyle } from "styled-components";
import { Route, Routes } from 'react-router-dom';
import FestivalList from './list/FestivalList';
import { getFestivalItem, testdb } from './api/festivalListAPI';

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
  console.log(testdb);
  console.log(getFestivalItem);
  return (
    <>
      <GlobalStyle />

      <Routes>
        <Route index element={<FestivalList />} />
        {/* 이 안에 Route 작성 */}
      </Routes>
    </>
  );
}

export default App;
