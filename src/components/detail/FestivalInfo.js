import React, { useState } from 'react';

import calender from "../../images/calender.png";
import location from "../../images/location.png";
import megaphone from "../../images/megaphone.png";
import computer from "../../images/computer.png";
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

const FestivalInfoWrapper = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding-top: 20px;
	
	ul {
		padding: 0;
		margin-left: 20px;
		margin-bottom: 0;
	}

	li {
		list-style: none;
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}

	span {
		margin-right: 5px;
	}

	.imgstyle {
		display: block;
		width: 50px;
		height: 50px;
		background-repeat: no-repeat;
		background-size: 40px 40px;
		background-position: 50% 50%;
		background-color: #e6e6e6;
		border-radius: 50%;
		margin-right: 10px;
	}
	.calender {
		background-image: url(${calender});
	}

	.location {
		background-image: url(${location});
	}

	.megaphone {
		background-image: url(${megaphone});
	}

	.computer {
		background-image: url(${computer});
	}
`;

const FestivalInfoTitle = styled.div`
	span {
		background-color: #eee;
		padding: 5px 10px;
		box-sizing: border-box;
		border-radius: 20px;
		font-size: 23px;
		color: #333;
		/* box-shadow: 3px 3px 3px #666; */
	}
	
	p {
		font-size: 50px;
		font-weight: bold;
		margin-top: 10px;
	}
`;

const HpLink = styled(NavLink)`
	text-decoration: none;
	color: lightcoral;
`;

const FestivalInfoTextWrapper = styled.div`
	display: flex;
	align-items: center;


	.thumbimg {
		border-radius: 10px;
	}
`;

function FestivalInfo(props) {
	const { detailItem} = props;
	const { image, 축제시작일자, 축제종료일자, 개최장소, 소재지도로명주소, 축제내용, 주관기관명, 홈페이지주소, 카테고리, 축제명 }  = detailItem[0];
	console.log(props);

	return (
		<FestivalInfoWrapper>
			<FestivalInfoTitle>
				<span>{`#${카테고리}`}</span>
				<p>{축제명}</p>
			</FestivalInfoTitle>
			<FestivalInfoTextWrapper>
				<img src={image} className='thumbimg' />
				<ul>
					<li>
						<span className='calender imgstyle'></span>
						<span>{`${축제시작일자} ~ ${축제종료일자}`}</span>
					</li>
					<li>
						<span className='location imgstyle'></span>
						<span>{소재지도로명주소}</span>
						<span>{개최장소}</span>
					</li>
					<li>
						<span className='megaphone imgstyle'></span>
						<span>{축제내용}</span>
						<span>{주관기관명}</span>
					</li>
					<li>
						<span className='computer imgstyle'></span>
						<HpLink>{홈페이지주소}</HpLink>
					</li>
				</ul>
			</FestivalInfoTextWrapper>
			
		</FestivalInfoWrapper>
	);
}

export default FestivalInfo;