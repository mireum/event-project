import React, { useState } from 'react';
import calender from "../images/calender.png";
import location from "../images/location.png";
import styled from 'styled-components';
import { getEventItem } from '../api/eventAPI';
import { useDispatch, useSelector } from 'react-redux';

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

`;

function FestivalInfo(props) {
	console.log(props);
	const { 축제시작일자, 축제종료일자, 개최장소 } = props;
	// const dispatch = useDispatch();
	// const item = useSelector(selectSeletedFestival);

	// const [item, setItem] = useState(0);
	

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
				</li>
		</ul>
		</FestivalInfoWrapper>
		
	);
}

export default FestivalInfo;