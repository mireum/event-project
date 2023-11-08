import React from 'react';
import styled from 'styled-components';
import { MdOutlineManageSearch } from "react-icons/md";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { PiHouseLine } from "react-icons/pi";
import { Outlet, navigate, useNavigate } from 'react-router-dom';
import Footer from './Footer';

const HedaerInner = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	padding: 10px 0 20px 0;

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

const HeaderRight = styled.div`
	display: flex;
	align-items: center;

	.bm-icon  {
		font-size: 35px;
		margin-right: 15px;
	}

	.bm-icon:hover {
		color: lightcoral;
		/* display: none; */
	}

	.fill {
		font-size: 35px;
		margin-right: 15px;
		/* display: none; */

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

	return (
		<>
			<header>
				<HedaerInner>
					<HeaderLeft>
						<PiHouseLine className='home-icon cursor-pointer'
							onClick={() => { navigate('/') }}
						/>
					</HeaderLeft>

					<ul className='nav'>
						<li className='cursor-pointer'>진행중인 축제</li>
						<li className='cursor-pointer'>무료 전시회</li>
					</ul>

					<HeaderRight>
						<GoHeart className='bm-icon cursor-pointer'
							onClick={() => { navigate('/bk') }} > 
						<GoHeartFill className='fill'/>

							</GoHeart>
						<MdOutlineManageSearch className='sh-icon cursor-pointer'/>
					</HeaderRight>
				</HedaerInner>

			</header>
			
			<Outlet />

			<Footer />
		</>

	);
}

export default Header;