import React, { useState } from 'react';
import styled from 'styled-components';
import { MdOutlineManageSearch } from "react-icons/md";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { PiHouseLine } from "react-icons/pi";
import Finder from './Finder';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import logo from "../images/logo.png";


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

	.home-icon {
		font-size: 50px;
		margin-right: 5px;
	}
`;

const HeaderCenter = styled.div`
	display: flex;
	align-items: center;
	background-image: url(${logo});
	background-size: 220px 50px;
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

	.big-icon {
		font-size: 50px;
	}
	.bm-icon:hover {
		color: #FF5151;
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
	const navigate = useNavigate();
	const [showFind, setShowFind] = useState(false);

	return (
		<>
			<HeaderWrap>
				<HeaderInner>
					<HeaderLeft>
						{/* <PiHouseLine className='home-icon cursor-pointer'
							onClick={() => { navigate('/') }}
						/> */}
					</HeaderLeft>

					<HeaderCenter>
					</HeaderCenter>

					<HeaderRight>
						<GoHeart className='bm-icon cursor-pointer'
							onClick={() => { navigate('/bk') }} > 
							<GoHeartFill className='fill'/>
						</GoHeart>

						<MdOutlineManageSearch className='bm-icon cursor-pointer' onClick={()=> {setShowFind(prev=>!prev)}} />
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