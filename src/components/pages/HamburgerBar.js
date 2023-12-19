import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { IoSearch } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { selectId, selectUsername } from '../../features/userSlice';
import Finder from '../Finder';

const Background = styled.div`
  .layout {
    position: fixed;
    width: 70%;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: 200;
    background-color: rgba(0, 0, 0, 0.4);
  }
  /* @media screen and (max-width: 768px){
    .layout {
      width: 50%;
    }
  } */
`;

const MenuWrapper = styled.div`
  width: 30%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: -30%;
  z-index: 199;
  background-color: #f8f8f8;
  padding: 10px;
  box-sizing: border-box;
  transition:  0.5s;

  /* @media screen and (max-width: 768px){
    /* width: 50%; */
    /* right: -50%; */
    top: 0;
    bottom: 0;
    @media screen and (max-width: 768px){
      .active {
      right: 0;
      }
      .hidden {
        right: -50%;
      }
    }
    
  } */

  .active {
    right: 0;
  }
  .hidden {
    right: -30%;
  }
  .iconsWrap {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;
    .icons {
    font-size: 40px;
    color: #000;
    }
    .icons:hover {
      color: #7a45e5;
    }
    .search {
      margin-right: 45%;
    }  
  }
`;

const MenuList = styled.div`
  ul {
    padding: 0;
  }
  li {
    padding-bottom: 10px;
    list-style: none;
  }
  li .link {
    font-size: 30px;
    text-decoration: none;
    color: #222;
  }
  li .link:hover {
    color: #7a45e5;
  }
  @media screen and (max-width: 768px) {
    li .link {
    font-size: 20px;
  }
  }
`;


function HamburgerBar(props) {
	const navigate = useNavigate();
  const userId = useSelector(selectId);
  const userName = useSelector(selectUsername);
  const { show, setShow, setShowFind, showFind } = props;

  return (
    <Background onClick={(e) => {
      setShow(prev => !prev);
      e.stopPropagation();
      }} >
      <MenuWrapper className={show ? 'active' : 'hidden'} >
        <div className="iconsWrap" onClick={() => {setShow(prev => !prev);}}>
          <AiOutlineUser 
            className='icons cursor-pointer' 
            onClick={() => { 
              userId && userName ? navigate('/profile') : navigate('/login');
              setShow(prev => !prev);
            }} 
          />
          <IoSearch className='bm-icon cursor-pointer search' onClick={()=> {setShowFind(prev=>!prev)}} />
          <IoClose className='icons cursor-pointer' onClick={() => {setShow(prev => !prev)}}/>
        </div>
        <MenuList >
          <ul>
            <li>
              { showFind && <Finder setShowFind={setShowFind} setShow={setShow} /> }    
              {/* <Finder setShowFind={setShowFind}/> */}
            </li>
            <li><Link className='link' to={'/board/list'}>후기 게시판</Link></li>
            <li onClick={() => {
                userId && userName ? navigate('/bookmark') : navigate('/login')
              }}>
              <Link className='link' to={'/bookmark'}>찜한 축제/전시</Link>
            </li>
          </ul>
        </MenuList>
      </MenuWrapper>
      <div className='layout' ></div>
    </Background>
  );
}

export default HamburgerBar;