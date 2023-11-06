import React from 'react';
import styled from 'styled-components';
import { MdOutlineBookmarks, MdOutlineFestival, MdOutlineManageSearch } from "react-icons/md";
import { Navigate, useNavigate } from 'react-router-dom';

const HedaerInner = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	padding-top: 10px;

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
	}

	.sh-icon {
		font-size: 40px;
	}
`;

function Header(props) {
	const navigate = useNavigate();

	return (
		<header>
			<HedaerInner>
				<HeaderLeft>
					<MdOutlineFestival className='home-icon cursor-pointer'
						onClick={() => { navigate('/') }}
					/>
				</HeaderLeft>

				<ul className='nav'>
					<li className='cursor-pointer'>진행중인 축제</li>
					<li className='cursor-pointer'>무료 전시회</li>
				</ul>

				<HeaderRight>
					<MdOutlineBookmarks className='bm-icon cursor-pointer'
						onClick={() => { navigate('/bk') }}/>
					<MdOutlineManageSearch className='sh-icon cursor-pointer'/>
				</HeaderRight>
			</HedaerInner>
		</header>
	);
}

export default Header;