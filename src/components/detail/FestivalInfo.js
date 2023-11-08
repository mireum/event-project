import React, { useState } from 'react';
import calender from "../images/calender.png";
import location from "../images/location.png";
import megaphone from "../images/megaphone.png";
import computer from "../images/computer.png";
import styled from 'styled-components';

const FestivalInfoWrapper = styled.div`
	max-width: 1200px;
	margin: 0 auto;

	ul {
		padding: 0;
	}

	li {
		list-style: none;
		display: flex;
		align-items: center;
	}

	.calender {
		display: block;
		width: 40px;
		height: 40px;
		background-image: url(${calender});
		background-repeat: no-repeat;
		background-size: 40px 40px;
	}

	.location {
		display: block;
		width: 40px;
		height: 40px;
		background-image: url(${location});
		background-repeat: no-repeat;
		background-size: 40px 40px;
	}

	.megaphone {
		display: block;
		width: 40px;
		height: 40px;
		background-image: url(${megaphone});
		background-repeat: no-repeat;
		background-size: 40px 40px;
	}


`;

function FestivalInfo(props) {
	const { detailItem: { 축제시작일자, 축제종료일자, 개최장소, 소재지도로명주소, 축재내용,  주관기관명, 홈페이지주소 } } = props;

	return (
		<FestivalInfoWrapper>
			<ul>
				<li>
					<span className='calender'></span>
					<span>{축제시작일자}</span>
					<span>~</span>
					<span>{축제종료일자}</span>
				</li>
				<li>
					<span className='location'></span>
					<span>{개최장소}</span>
					<span>{소재지도로명주소}</span>
				</li>
				<li>
					<span className='megaphone'></span>
					<span>{축재내용}</span>
					<span>{주관기관명}</span>
				</li>
				<li>
					<span className='computer'></span>
					<span>{홈페이지주소}</span>
				</li>
		</ul>
		</FestivalInfoWrapper>
	);
}

export default FestivalInfo;