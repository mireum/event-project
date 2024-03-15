import React, { useEffect, useState } from 'react';

import calender from "../../images/calender.jpg";
import location from "../../images/location.jpg";
import megaphone from "../../images/megaphone.jpg";
import computer from "../../images/computer.jpg";
import styled from 'styled-components';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addLikedItem, likedList, removeLikedItem } from '../../features/likedSlice';
import { PiHeartStraightBold, PiHeartStraightFill } from 'react-icons/pi';
import { selectId, selectUsername } from '../../features/userSlice';

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
		margin-bottom: 20px;
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
		background-color: #ededed;
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
		background-color: #a67aff;
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
		margin-top: 20px;
		margin-bottom: 30px;
	}

	@media screen and (max-width: 915px) {
		p {
			font-size: 35px;
		}
	}

	@media screen and (max-width: 768px) {
		text-align: center;
	}
	

	@media screen and (max-width: 670px) {
		p {
			font-size: 26px;
		}
		
		span {
			font-size: 16px;
		}
	}
`;

const HpLink = styled.a`
	border: 1px;
	border-radius: 50px;
	padding: 10px;
	text-decoration: none;
	background-color: #ededed;
	color: #7a45e5;
	cursor: pointer;
	font-weight: bold;
	margin-right: 30px;
`;

const FestivalInfoTextWrapper = styled.div`
	display: flex;

	.thumbimg {
		border-radius: 10px;

		@media screen and (max-width: 768px) {
			margin: 0 10px 20px;
			height: 300px;
		}
	}

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}

	ul li span {
		font-size: 20px;
	}
`;

const LikeBox = styled.div`
  position: fixed;
  bottom: 20px;
  right: 2%;
  background-color: #f5f5f5;
  border-radius: 50%;
  width: 50px;
  height: 50px;
	border: 3px solid #7a45e5;
	z-index: 10;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

function FestivalInfo(props) {
	const { detailItem: { image, fstvlStartDate, fstvlEndDate, opar, rdnmadr, fstvlCo, mnnstNm, homepageUrl, category, fstvlNm, auspcInsttNm, type, id } } = props;

	const [likeBtn, setLikeBtn] = useState(false);
  const dispatch = useDispatch();
  const bookmarkList = useSelector(likedList);
	const userId = useSelector(selectId);
  const userName = useSelector(selectUsername);
	const navigate = useNavigate();

	const handleLike = (item) => {
		if (userId && userName) {
			if (likeBtn) {
				setLikeBtn(prev=>!prev);
				dispatch(removeLikedItem(item.id));
			} else {
				setLikeBtn(prev=>!prev);
				dispatch(addLikedItem(item));
			}
		} else {
      navigate('/login');
    }
    
  };

	useEffect(() => {
    if (bookmarkList.includes(props.detailItem)) {
      setLikeBtn(true);
    }
  }, []);

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
						<HpLink onClick={() => {navigate(`/detail/${id}/reserv`)}} target='_black'>예약하기</HpLink>
					</li>
				</ul>
				<LikeBox className='cursor-pointer' onClick={() => {handleLike(props.detailItem)}}>
					{likeBtn
					? <PiHeartStraightFill style={{ fontSize: '35px', color: '#FF5151' }} /> 
					: <PiHeartStraightBold style={{ fontSize: '35px' }}/>}
				</LikeBox>
			</FestivalInfoTextWrapper>
			
		</FestivalInfoWrapper>
	);
}

export default FestivalInfo;