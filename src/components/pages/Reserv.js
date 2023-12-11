import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getReservList, selectReservList } from '../../api/eventListSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { getEventListById } from '../../api/eventListAPI';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

const ReservItemContainer = styled(Container)`
  max-width: 1200px;
  padding: 20px 0 0 0;
  
  .bm-icon {
    font-size: 34px;
    margin-right: 10px;
  	color: #7a45e5;
  }

  h2 {
    font-size: 30px;
    font-weight: bold;

    @media screen and (max-width: 768px){
      text-align: center;
    }
  }

`;

const ReservItemInnerContainer = styled.div`
  padding-top: 20px;
  display: flex;

  h4 {
    font-weight: bold;
  }

  p {
    padding-top: 16px;
    line-height: 30px;
  }

  span {
    font-weight: bold;
    font-size: 16px;
  }

  div {
    width: 50%;

    button {
      margin-left: 180px;
    }
  }
`

function Reserv(props) {
  const { EventListId } = useParams();
	const dispatch = useDispatch();
  const navigate = useNavigate();
	const reservItem = useSelector(selectReservList);
  const { fstvlNm, fstvlStartDate, fstvlEndDate, image } = reservItem;
	
  useEffect(() => {
    const api = async () => {
      try {
        const result = await getEventListById(EventListId);
        dispatch(getReservList(result));
      } catch (err) {
        console.error(err);
      }
    }
    api(); 
  }, [])

  if (fstvlStartDate) {
    const res = fstvlStartDate.replace(/-/g, '');
    console.log(typeof(res));

  }

  return (
    <ReservItemContainer>
      <h2>
        <MdOutlineArrowBackIosNew 
          className='bm-icon cursor-pointer'
          onClick={() => {navigate(-1);}}
        />
        예약 및 결제
      </h2>

      <ReservItemInnerContainer>
        <div>
          <h4>예약 정보</h4>
          <img src={image} />
          <p><span>축제명</span><br></br> {fstvlNm}</p>
          <p><span>날짜</span><br></br> {fstvlStartDate} ~ {fstvlEndDate}</p>
          <p><span>인원</span> 1명 <button>선택하기</button></p>
        </div>
        <div>
          <h4>결제</h4>
          <p><span>인원</span></p>
        </div>
      </ReservItemInnerContainer>
    </ReservItemContainer>
  );

}

export default Reserv;