import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { IoSearch } from "react-icons/io5";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { PiCalendarBlankLight } from "react-icons/pi";
import { AiOutlineUser } from "react-icons/ai";

import Finder from './Finder';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import logo from "../images/logo.png";
import axios from 'axios';



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
`;

function Header(props) {
	useEffect(() => {
		async function fetchData() {
			const result = await axios.get('http://localhost:8088/', { withCredentials: true });
			console.log('메인:', result);
		}
		fetchData();
	}, []);
	const navigate = useNavigate();
	const [showFind, setShowFind] = useState(false);
	
	return (
		<>
			<HeaderWrap>
				<HeaderInner>
					<HeaderLeft>
						<GoHeart className='bm-icon cursor-pointer'
							onClick={() => { navigate('/bookmark') }}> 
						</GoHeart>
					</HeaderLeft>

					<HeaderCenter onClick={() => navigate('/')} />

					<HeaderRight>
						<PiCalendarBlankLight 
							className='bm-icon cursor-pointer' 
							onClick={() => { navigate('/calendar') }} 
						/>
						<IoSearch className='bm-icon cursor-pointer' onClick={()=> {setShowFind(prev=>!prev)}} />
						<AiOutlineUser className='bm-icon cursor-pointer' 
							onClick={() => { navigate('/login')}}
						/>
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