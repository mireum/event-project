import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { IoClose } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";


const MenuWrapper = styled.div`
  width: 30%;
  position: fixed;
  top: 0;
  bottom: 0;
  right: -30%;
  z-index: 200;
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
  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 199;
    display: none;
  }
`;

const MenuList = styled.div`
  
`;


function HamburgerBar(props) {
	const navigate = useNavigate();
  
  const { show, setShow } = props;

  const handleChange = () => {
    setShow(!show)
  }


  return (
    <div className='overlay'>
      <MenuWrapper className={show ? 'active' : 'hidden'}>
        <div className="iconsWrap">
          <AiOutlineUser 
            className='icons cursor-pointer' 
            onClick={() => { 
              navigate('/login');
              handleChange();
            }} 
          />
          <IoClose className='icons cursor-pointer' onClick={() => {handleChange()}}/>
        </div>
        <MenuList>
          <ul>
            <li><Link to={'/board'}>후기 게시판</Link></li>
            <li onClick={() => {handleChange()}}>
              <Link to={'/bookmark'}>찜한 축제/전시</Link>
            </li>
          </ul>
        </MenuList>
        </MenuWrapper>
    </div>
    
  );
}

export default HamburgerBar;