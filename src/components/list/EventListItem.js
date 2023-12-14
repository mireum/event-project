import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { PiHeartStraightBold, PiHeartStraightFill } from 'react-icons/pi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { addLikedItem, likedList, removeLikedItem } from '../../features/likedSlice';
import { selectId, selectUsername } from '../../features/userSlice';

const ItemImage = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const LikeBox = styled.div`
  position: absolute;
  bottom: 45%;
  right: 7%;
  background-color: #fff;
  border-radius: 50%;
  width: 30px;
  height: 30px;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const InfoText = styled.div`
  margin-top: 6px;
  margin-bottom: 44px;
  line-height: 8px;

  h4 {
    margin-bottom: 12px;
    font-size: 18px;
    font-weight: bold;
  }
`;

function EventListItem(props) {
  const { item } = props;
  const { id, fstvlNm, image, fstvlStartDate, fstvlEndDate, lnmadr, rdnmadr } = item;
  const navigate = useNavigate();
  const [likeBtn, setLikeBtn] = useState(false);
  const dispatch = useDispatch();
  const bookmarkList = useSelector(likedList);
  const userId = useSelector(selectId);
  const userName = useSelector(selectUsername);

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
    if (bookmarkList.includes(item)) {
      setLikeBtn(true);
    }
  }, []);


  return (
    <Col md={4} style={{position:"relative"}}>
      <ItemImage
        className='cursor-pointer' 
        src={image}
        onClick={() => {
          navigate(`/detail/${id}`)
        }} 
      />
      <LikeBox className='cursor-pointer' onClick={() => {handleLike(item)}}>
        {likeBtn
        ? <PiHeartStraightFill style={{ fontSize: '25px', color: '#FF5151' }} /> 
        : <PiHeartStraightBold style={{ fontSize: '25px' }}/>}
      </LikeBox>
      <InfoText>
        <h4>{fstvlNm}</h4>      
        <p>{`${fstvlStartDate} ~ ${fstvlEndDate}`}</p>
        <p>
          {lnmadr
          ? `${lnmadr.split(' ')[0]} ${lnmadr.split(' ')[1]}`
          : `${rdnmadr.split(' ')[0]} ${rdnmadr.split(' ')[1]}` } 
        </p>
      </InfoText> 
    </Col>
    
  );
}

export default EventListItem;