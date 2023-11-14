import React, { useEffect, useState } from 'react';
import { Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { PiHeartStraightBold, PiHeartStraightFill } from "react-icons/pi";
import { addbookmarkList, changeLiked, removebookmarkList, selectBookmarkList } from './bookmarkSlice';

const ItemWrap = styled(Col)`
  position: relative;

  .button-wrap {
    position: absolute;
    bottom: 45%;
    right: 7%;
    background-color: #fff;
    border-radius: 50%;
    width: 30px;
    height: 30px;
  }
    svg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
`;

const ItemImage = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 5px;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
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
  console.log(props);
  const { item: { id, fstvlNm, image, fstvlStartDate, fstvlEndDate, auspcInsttNm }, handleChange, handleremoveliked } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bookmarkList = useSelector(selectBookmarkList);
  // const copyItem = {...props.item};
  // copyItem.liked = 'false';
  // console.log(copyItem);

  const [bookMarkButton, setBookMarkButton] = useState(false);
  
  useEffect(() => {
		const dbbookmark = JSON.parse(localStorage.getItem('bookMarkButton')) || [];
		// setBookMarkButton(dbbookmark);
	}, []);

  useEffect(() => {
    localStorage.setItem('bookMarkButton', JSON.stringify(bookMarkButton)); 
  }, [bookMarkButton]);

  return (
    <ItemWrap md={4} className='cursor-pointer'>
      <ItemImage 
        src={image}
        onClick={() => {
          navigate(`/detail/${id}`)
        }} 
      />
      <div className='button-wrap' onClick={() => {
        dispatch(addbookmarkList({
          ...props.item,
          liked: true
        }));
        setBookMarkButton(!bookMarkButton);
        // handleChange(props.item.liked);
        // dispatch(changeLiked({
        //   ...props.item,
        //   liked: false
        // }))
        // handleremoveliked();
      }}>
        {bookMarkButton
        ? <PiHeartStraightFill style={{ fontSize: '25px', color: '#FF5151' }} /> 
        : <PiHeartStraightBold style={{ fontSize: '25px' }}/>}
      </div >
      <InfoText>  
        <h4>{fstvlNm}</h4>      
        <p>{`${fstvlStartDate} ~ ${fstvlEndDate}`}</p>
        <p>{auspcInsttNm}</p>
      </InfoText> 
    </ItemWrap>
    
  );
}

export default EventListItem;