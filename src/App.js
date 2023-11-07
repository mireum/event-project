import logo from './logo.svg';
import './App.css';
import styled, { createGlobalStyle } from "styled-components";
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import BookMark from './components/BookMark';
import Footer from './components/Footer';
import Detail from './components/Detail';


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
  return (
    <>
      <GlobalStyle />

      <Routes>
        {/* 이 안에 Route 작성 */}
        <Route path='/' element={<Header />}>
          <Route path='/bk' element={<BookMark />} >
            </Route>
          <Route path='/detail' element={<Detail />}/>

          <Route path='/' element={<Footer />}  />
        </Route>
        
      </Routes>
    </>
  );
}

export default App;
