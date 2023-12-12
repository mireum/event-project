import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getReservList, selectReservList } from '../../api/eventListSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import { Button, Container, Modal } from 'react-bootstrap';
import { getEventListById } from '../../api/eventListAPI';
import { MdOutlineArrowBackIosNew, MdRemoveCircleOutline } from 'react-icons/md';

const ReservItemContainer = styled(Container)`
  max-width: 1200px;
  padding-top: 20px;
  padding-bottom: 60px;
  
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
    width: 500px;
    font-weight: bold;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
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
      margin-left: 30px;
      border: none;
      color: #fff;
      background-color: #7a45e5;
    }
  }

  .pay-title {
    display: flex;
    justify-content: space-between;
  }

  .pay-content {
    display: flex;
    justify-content: space-between;
  }
`

const PersonModal = styled(Modal)`
  margin-top: 200px;

  .count-btn {
    border: 1px solid #ccc;
    border-radius: 50%;
    background: #fff;
    font-weight: bold;
    color: #7a45e5;
    margin: 5px 10px;
  }

  .content-modal {
    display: flex;
    justify-content: space-between;
    margin: 0 30px;
  }
`;

function Reserv(props) {
  const { EventListId } = useParams();
	const dispatch = useDispatch();
  const navigate = useNavigate();
	const reservItem = useSelector(selectReservList);
  const { fstvlNm, fstvlStartDate, fstvlEndDate, image, price } = reservItem;
	
  const [ count, setCoutn ] = useState({
    adult: 0,
    kids: 0,
    child: 0
  });
  const { adult, kids, child } = count;
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
          <p><span>인원</span> <button className='ch-btn' onClick={handleOpenModal}>선택</button></p>
        </div>
        <div className='pay-container'>
          <h4>결제</h4>
          <div className='pay-title'>
            <p><span>인원</span></p>
            <p><span>요금</span></p>
          </div>
            {adult 
              ? 
              <>
                <div className='pay-content'>
                  <p>성인 {adult}명</p>
                  <p>{price * adult}</p>
                </div>
              </>
              : null    
            }
            {kids
              ?
              <>
              <div className='pay-content'>
                <p>어린이 {kids}명</p>
                <p>{price/2 * kids}</p>
              </div>
              </>
              : null    
            }
            {child
              ?
              <>
              <div className='pay-content'>
                <p>유아 {child}명</p>
                <p>{price/5 * child}</p>
              </div>
              </>
              : null    
            }
          {adult || kids || child ? <button>예약하기</button> : null}
        </div >
      </ReservItemInnerContainer>

      <PersonModal show={showModal} onHide={handleCloseModal} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>인원을 선택해주세요</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='content-modal'>
            <div>
              성인
            </div>
            <div>
              <button className='count-btn' onClick={() => {setCoutn({...count, adult: adult-1})}} disabled={!adult}>-</button>
              {adult}
              <button className='count-btn' onClick={() => {setCoutn({...count, adult: adult+1})}}>+</button>  
            </div>
          </div>
          <div className='content-modal'>
            <div>
              어린이
            </div>
            <div>
              <button className='count-btn' onClick={() => {setCoutn({...count, kids: kids-1})}} disabled={!kids}>-</button>
              {kids}
              <button className='count-btn' onClick={() => {setCoutn({...count, kids: kids+1})}}>+</button>
            </div>
          </div>
          <div className='content-modal'>
            <div>
            유아
            </div>
            <div>
              <button className='count-btn' onClick={() => {setCoutn({...count, child: child-1})}} disabled={!child}>-</button>
              {child}
              <button className='count-btn' onClick={() => {setCoutn({...count, child: child+1})}}>+</button>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {setCoutn({...count, adult: 0, kids: 0, child: 0})}}>
            초기화
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            저장
          </Button>
        </Modal.Footer>
      </PersonModal>

    </ReservItemContainer>
  );

}

export default Reserv;

