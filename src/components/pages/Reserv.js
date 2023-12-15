import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getReservList, selectReservList } from '../../api/eventListSlice';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import { Button, Container, Modal } from 'react-bootstrap';
import { getEventListById } from '../../api/eventListAPI';
import { MdOutlineArrowBackIosNew, MdOutlineReport } from 'react-icons/md';
import { GoCreditCard } from "react-icons/go";
import { IoIosPhonePortrait } from "react-icons/io";
import { selectId, selectUsername } from '../../features/userSlice';

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

  .pay-modal {
  }
`;

const ReservItemInnerContainer = styled.div`
  padding-top: 20px;
  display: flex;

  h4 {
    width: 90%;
    font-weight: bold;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
  }

  p {
    padding-top: 16px;
    line-height: 30px;
    font-size: 16px;
  }

  span {
    font-weight: bold;
    font-size: 18px;
  }

  div {
    width: 50%;

    button {
      margin-left: 30px;
      border: none;
      color: #fff;
      background-color: #7a45e5;
      padding: 0 10px;
    }
  }

  .date-info-text {
    display: none;
  }

  .date-info:hover > .date-info-text {
      display: block;
      color: yellow;
  }

  .pay-title {
    display: flex;
    justify-content: space-between;
  }

  .pay-content {
    display: flex;
    justify-content: space-between;
  }

  .reserv-btn-container {
    width: 90%;
    border-top: 1px solid #ccc;
    margin-top: 30px;
    padding-top: 10px;
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
    padding: 0 6px;
  }

  .content-modal {
    display: flex;
    justify-content: space-between;
    margin: 0 30px;
  }
`;

const PayModal = styled(Modal)`
  margin-top: 160px;

  .pay-info-container {
    border-radius: 10px;
    background-color: #5882FA;
    padding: 16px;

    .pay-total-container {
    border-radius: 10px;
    background-color: #2E64FE;
    }
    
    span {
    color: #ccc;
    }

    p {
      color: #fff;
      margin: 0 auto;
    }
  }

  .flex-between {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px;
  }

  .pay-type-container {
    margin-top: 10px;
    border-radius: 10px;
    border: 1px solid #bbb;
    padding: 16px;

    .pay-type {
      display: flex;
      text-align: center;

      div {
        padding: 0 8px;

        &.active {
          background-color: #ccc;
        }
      }

      button {
        border: none;
        background: none;
        font-size: 30px;
      }
    }
  }

`;

function Reserv(props) {
  const { EventListId } = useParams();
	const dispatch = useDispatch();
  const navigate = useNavigate();
	const reservItem = useSelector(selectReservList);
  const userName = useSelector(selectUsername);
  const userId = useSelector(selectId);
  const { fstvlNm, fstvlStartDate, fstvlEndDate, image, price, mnnstNm } = reservItem;
	
  const [ count, setCoutn ] = useState({
    adult: 0,
    kids: 0,
    child: 0
  });
  const { adult, kids, child } = count;
  
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {setShowModal(false)};
  const handleOpenModal = () => setShowModal(true);
  
  const [showPayModal, setShowPayModal] = useState(false);
  const handleOpenPayModal = () => setShowPayModal(true);
  const [payBtn, setPayBtn] = useState('');

  const [showResultModal, setShowResultModal] = useState(false);

  useEffect(() => {
    const eventList = async () => {
      try {
        const result = await getEventListById(EventListId);
        dispatch(getReservList(result));
      } catch (err) {
        console.error(err);
      }
    }
    eventList(); 
  }, [])

  if (!reservItem) {
    return null;
  }

  let dateDiff = 0;
  if (fstvlEndDate) {
    dateDiff = Number(fstvlEndDate.replace(/-/g, '') - Number(fstvlStartDate.replace(/-/g, '')));
  }

  let payTotal = 0;
  if (adult || kids || child) {
    payTotal = (price * adult + price/2 * kids + price/5 * child).toLocaleString('ko-KR')
  }

  const handleSubmitPay = async () => {
    setShowPayModal(false);
    setShowResultModal(true);
    try {
      await axios.post('http://localhost:8088/user/reserv', {reservItem, count, payTotal, payBtn, userId, userName})
    } catch (err) {
      console.error(err);
    }

  }

  const handleReservResult = () => {
    navigate('/user/reserv/info');
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
          
          <p><span>날짜</span> <MdOutlineReport className='date-info'><div className='date-info-text'>축제 일정 아무때나 방문하셔도 됩니다.</div></MdOutlineReport><br></br> {dateDiff ? `${fstvlStartDate} ~ ${fstvlEndDate}` : fstvlStartDate }</p>
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
                  <p>{(price * adult).toLocaleString('kr-KR')}</p>
                </div>
              </>
              : null    
            }
            {kids
              ?
              <>
              <div className='pay-content'>
                <p>어린이 {kids}명</p>
                <p>{(price/2 * kids).toLocaleString('kr-KR')}</p>
              </div>
              </>
              : null    
            }
            {child
              ?
              <>
              <div className='pay-content'>
                <p>유아 {child}명</p>
                <p>{(price/5 * child).toLocaleString('kr-KR')}</p>
              </div>
              </>
              : null    
            }
          {adult || kids || child 
            ? <div className='reserv-btn-container'>
                <p><span>{payTotal}원</span></p>
                <button onClick={handleOpenPayModal}>결제하기</button>
              </div> 
            : null}
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

      <PayModal show={showPayModal} onHide={() => {setShowPayModal(false); setPayBtn('');}}>
        <Modal.Header closeButton>
          <Modal.Title>
            결제
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='pay-info-container'>
            <div className='flex-between'>
              <span>축제명</span> 
              <p>{fstvlNm}</p>
              </div>
            <div className='flex-between'>
              <span>판매자</span> 
              <p>{mnnstNm}</p>
            </div>
            <div className='flex-between pay-total-container'>
              <span>결제금액</span>  
              <p>{payTotal}원</p>
            </div>
          </div>
          <div className='pay-type-container'>
            <h4>결제수단 선택</h4>
            <div className='pay-type'>
              <div className={payBtn === 'card' && 'active'}>
                <button onClick={() => {setPayBtn('card')}}><GoCreditCard /></button>
                <p>카드결제</p>
              </div>
              <div className={payBtn === 'phone' && 'active'}>
                <button onClick={() => {setPayBtn('phone')}}><IoIosPhonePortrait /></button>
                <p>핸드폰결제</p>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmitPay} disabled={!payBtn}>
            결제
          </Button>
        </Modal.Footer>
      </PayModal>

      <Modal
        size="sm"
        show={showResultModal}
        onHide={() => setShowResultModal(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        style={{marginTop: '180px'}}
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{fontWeight: 'bold'}}>예약을 완료 하였습니다!<br/>예약페이지로 이동하시겠습니까?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowResultModal(false)} >
              닫기
            </Button>
            <Button variant="primary" onClick={handleReservResult} >
              확인
            </Button>
        </Modal.Footer>
        </Modal>      
    </ReservItemContainer>
  );

}

export default Reserv;

