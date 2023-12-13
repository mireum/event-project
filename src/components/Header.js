import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { IoSearch } from "react-icons/io5";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { PiCalendarBlankLight } from "react-icons/pi";
import { RiMenu3Fill } from "react-icons/ri";

import Finder from './Finder';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import logo from "../images/logo.png";
import axios from 'axios';
<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux';
import { selectId, selectUsername, setUser } from "../features/userSlice";
import { useCookies } from "react-cookie";
=======

import HamburgerBar from './pages/HamburgerBar';

import { useDispatch, useSelector } from 'react-redux';
import { selectId, selectUsername, setUser } from "../features/userSlice";
import { MdOutlineManageSearch } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';
import Login from './Login';
>>>>>>> af997d3dfff7b7dafbffdd68437f3fad0a50e1bf


const HeaderWrap = styled.header`
	position: sticky;
	top: 0;
	z-index: 10;
	background-color: #fff;
`;

const HeaderInner = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	position: relative;
	padding: 20px 0;

	.nav {
		display: flex;
		justify-content: center;
		margin: 0;
		padding: 0;
	}
		.nav li {
			list-style: none;
			font-weight: bold;
		}

		.nav li:hover {
			color: lightskyblue;
		}

		.nav li + li {
			margin-left: 50px
		}
`;

const HeaderLeft = styled.div`
	display: flex;
	align-items: center;
	width: 110px;
	margin-left: 15px;

	.bm-icon  {
		font-size: 40px;
		/* margin-right: 15px; */
	}
	.bm-icon:hover {
		color: #FF5151;
	}
`; 

const HeaderCenter = styled.div`
	display: flex;
	align-items: center;
	background-image: url(${logo});
	background-size: 220px 50px;
	background-repeat: no-repeat;
	background-position-y: 5px;
	width: 220px;
	height: 50px;
	cursor: pointer;
`;

const HeaderRight = styled.div`
	display: flex;
	align-items: center;

	.bm-icon  {
		font-size: 40px;
		margin-right: 15px;
	}

	.bm-icon:hover {
		color: #7a45e5;
	}

	.fill {
		font-size: 35px;
		margin-right: 15px;
	}

	.fill:hover {
		display: block;
	}

	.sh-icon {
		font-size: 40px;
	}
	.active {
		width: 30%;
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		z-index: 200;
		background-color: #f8f8f8;
		padding: 10px;
		box-sizing: border-box;
		transition:  0.5s;
  }
`;



function Header(props) {
	const userId = useSelector(selectId);
  const userName = useSelector(selectUsername);
	const navigate = useNavigate();

	const [log, setLog] = useState('');
	const [showFind, setShowFind] = useState(false);
	const user = useSelector(selectUsername);
	const dispatch = useDispatch();
	const [ showHamburger, setShowHamburger ] = useState(false);

	useEffect(() => {
		setLog(user);

	}, []);

	const logoutFunc = async () => {
		const id = document.cookie.match('connect.sid').input.split('%')[1].split('.')[0].slice(2);
		console.log(id);
		const result = await axios.post('http://localhost:8088/user/logout', {id});
		// if (result.data.flag) {}
		
		console.log(result);
		dispatch(setUser({id: '', username: ''}));
		// navigate('/');
	};


	return (
		<>
			<HeaderWrap>
				<HeaderInner>
					<HeaderLeft>
						{/* {<GoHeart className='bm-icon cursor-pointer'onClick={() => { 
							userId && userName ? navigate('/bookmark') : navigate('/login')
							}} 
						/>} */}
					</HeaderLeft>

					<HeaderCenter onClick={() => navigate('/')} />

					<HeaderRight>
						<PiCalendarBlankLight 
							className='bm-icon cursor-pointer' 
							onClick={() => { navigate('/calendar') }} 
						/>
<<<<<<< HEAD
						<MdOutlineManageSearch className='bm-icon cursor-pointer' onClick={()=> {setShowFind(prev=>!prev)}} />
						{log ? <span>{log}님   <button onClick={logoutFunc}>로그아웃</button></span>:  
						<AiOutlineUser className='bm-icon cursor-pointer' onClick={() => {navigate('/register')}}/>
						}
						<button onClick={logoutFunc}>로그아웃</button>
=======
						<IoSearch className='bm-icon cursor-pointer' onClick={()=> {setShowFind(prev=>!prev)}} />
						<RiMenu3Fill className='bm-icon cursor-pointer' onClick={() => {setShowHamburger(prev=>!prev)}} />
						{ showHamburger && <HamburgerBar show={showHamburger} setShow={setShowHamburger} /> }
						{/* <MdOutlineManageSearch className='bm-icon cursor-pointer' onClick={()=> {setShowFind(prev=>!prev)}} /> */}
						{/* {user ? <span>{user}님</span> :  */}
						{/* <AiOutlineUser className='bm-icon cursor-pointer' onClick={() => {navigate('/register')}}/> */}
						{/* } */}
>>>>>>> af997d3dfff7b7dafbffdd68437f3fad0a50e1bf
					</HeaderRight>
					{showFind && <Finder setShowFind={setShowFind} />}
				</HeaderInner>
			</HeaderWrap>
			<Outlet />
			<Footer />
		</>
	);
}

export default Header;