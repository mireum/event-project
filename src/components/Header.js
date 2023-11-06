import React from 'react';
import styled from 'styled-components';
import { MdOutlineBookmarks, MdOutlineFestival, MdOutlineManageSearch } from "react-icons/md";
import { Navigate, useNavigate } from 'react-router-dom';

const HedaerInnter = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 10px;
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
	// const navigate = useNavigate();

	return (
		<header>
			<HedaerInnter>
				<HeaderLeft>
					{/* <MdOutlineFestival className='home-icon cursor-pointer'/> */}
					<h1>축제 & 전시</h1>
				</HeaderLeft>

				<HeaderRight>
					<MdOutlineBookmarks  className='bm-icon cursor-pointer'/>
					<MdOutlineManageSearch  className='sh-icon cursor-pointer'/>
				</HeaderRight>
			</HedaerInnter>
		</header>
	);
}

export default Header;