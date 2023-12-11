import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getReservList, selectReservList } from '../../api/eventListSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import { Container, Modal } from 'react-bootstrap';
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
	
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);

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

  if (!reservItem) {
    return null;
  }

  let dateDiff = 0;
  if (fstvlEndDate) {
    dateDiff = Number(fstvlEndDate.replace(/-/g, '') - Number(fstvlStartDate.replace(/-/g, '')));
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
          <p><span>날짜</span><br></br> {dateDiff ? `${fstvlStartDate} ~ ${fstvlEndDate}` : fstvlStartDate }</p>
          <p><span>인원</span> 0명 <button onClick={handleOpenModal}>선택하기</button></p>
        </div>
        <div>
          <h4>결제</h4>
          <p><span>인원</span></p>
        </div>
      </ReservItemInnerContainer>

      <Modal
        size="sm"
        show={showModal}
        onHide={handleCloseModal}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            인원을 선택하세요
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            성인
            <button>-</button>
            0
            <button>+</button>
          </p>

        </Modal.Body>
      </Modal>
    </ReservItemContainer>
  );

}

export default Reserv;