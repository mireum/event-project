import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { IoClose } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { useSelector } from 'react-redux';
import { selectId, selectUsername } from '../../features/userSlice';

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 200;
  .layout {
    /* pointer-events: none;  */
    position: fixed;
    width: 70%;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: 200;
    background-color: rgba(0, 0, 0, 0.4);
  }
  
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
`;


function HamburgerBar(props) {
	const navigate = useNavigate();
  const userId = useSelector(selectId);
  const userName = useSelector(selectUsername);
  const { show, setShow } = props;

  // const handleChange = () => {
  //   setShow(!show)
  // }


  return (
    <Background onClick={(e) => {
      props.setShow(prev => !prev);
      e.stopPropagation();
      }} >
      <MenuWrapper className={show ? 'active' : 'hidden'} >
        <div className="iconsWrap" onClick={() => {props.setShow(prev => !prev)}}>
          <AiOutlineUser 
            className='icons cursor-pointer' 
            onClick={() => { 
              userId && userName ? navigate('/') : navigate('/login');
              props.setShow(prev => !prev);
            }} 
          />
          <IoClose className='icons cursor-pointer' onClick={() => {props.setShow(prev => !prev)}}/>
        </div>
        <MenuList>
          <ul>
            <li><Link className='link' to={'/board'}>후기 게시판</Link></li>
            <li onClick={() => {
                userId && userName ? navigate('/bookmark') : navigate('/login')
              }}>
              <Link className='link' to={'/bookmark'}>찜한 축제/전시</Link>
            </li>
          </ul>
        </MenuList>
      </MenuWrapper>
      <div className='layout'></div>
    </Background>
  );
}

export default HamburgerBar;