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
		/* background-color: #eee; */
		background-color: #ffbfbf;
		padding: 5px 10px;
		box-sizing: border-box;
		border-radius: 20px;
		font-size: 20px;
		color: #fff;
		font-weight: bold;
	}
	
	p {
		font-size: 50px;
		font-weight: bold;
		margin-top: 10px;
	}
`;

const HpLink = styled.a`
	text-decoration: none;
	color: lightcoral;
	cursor: pointer;
	font-weight: bold;
`;

const FestivalInfoTextWrapper = styled.div`
	display: flex;

	.thumbimg {
		border-radius: 10px;
	}
`;

function FestivalInfo(props) {
	const { detailItem } = props;
	const { image, fstvlStartDate, fstvlEndDate, opar, rdnmadr, fstvlCo, mnnstNm, homepageUrl, category, fstvlNm, auspcInsttNm, type }  = detailItem[0];


	return (
		<FestivalInfoWrapper>
			<FestivalInfoTitle>
				<span>{`#${auspcInsttNm}`}</span>
				<span>{`#${type}` ? type : '축제'}</span>
				<span>{`#${category}`}</span>
				<p>{fstvlNm}</p>
			</FestivalInfoTitle>
			<FestivalInfoTextWrapper>
				<img src={image} className='thumbimg' />
				<ul>
					<li>
						<span className='calender imgstyle'></span>
						<span>{`${fstvlStartDate} ~ ${fstvlEndDate}`}</span>
					</li>
					<li>
						<span className='location imgstyle'></span>
						<span>{`도로명주소: ${rdnmadr}`}</span>
					</li>
					<li>
						<span className='megaphone imgstyle'></span>
						<span>{fstvlCo}<br />{mnnstNm}</span>
					</li>
					<li>
						<span className='computer imgstyle'></span>
						<HpLink onClick={() => window.open(homepageUrl)} target='_black'>공식 홈페이지</HpLink>
					</li>
				</ul>
			</FestivalInfoTextWrapper>
			
		</FestivalInfoWrapper>
	);
}

export default FestivalInfo;