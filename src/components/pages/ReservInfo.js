import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectId, selectUsername } from '../../features/userSlice';
import styled from 'styled-components';
import { Button, Modal, Table } from 'react-bootstrap';

const ReservInfoContainer = styled.div`
  max-width: 1200px;
  margin: 50px auto;

  .reserv-title {
    margin-bottom: 30px;
  }

  .reserv-user {
    margin-bottom: 10px;
  }
  
  .cancel-btn {
    background: #fff;
    width: 100%;
  }
`;


function ReservInfo(props) {
  const userId = useSelector(selectId);
  const userName = useSelector(selectUsername);

  const [reserv, setReserv] = useState([]);
  // const [deleteReserv, setDeleteReserv] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [cancelId, setCancelId] = useState('');

  useEffect(() => {
    const reserv = async () => {
      try {
        const result = await axios.get('https://43.200.245.38/user/reserv/info', {params: {userId}})
        console.log(result);
        setReserv(result.data);
      } catch (err) {
        console.error(err);
      }
    }
    reserv();
  }, [])

  const handleCancelPay = (id) => {
    setCancelId(id)
    setShowModal(true);
  };
  
  const handleSubmitCancelPay = async () => {
    setShowModal(false)
    
    try {
      await axios.post('https://43.200.245.38/post/reserv/delete', {cancelId});
      const result = await axios.get('https://43.200.245.38/user/reserv/info', {params: {userId}})
      setReserv(result.data)
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <ReservInfoContainer>
        <h2 className='reserv-title'>예약 정보</h2>
        <h4 className='reserv-user'>{`${userName}님의 예약`}</h4>
        <Table striped="columns">
          <thead>
            <tr>
              <th></th>
              <th>축제날짜</th>
              <th>축제명</th>
              <th>인원</th>
              <th>결제</th>
              <th></th>
            </tr>
          </thead>
          {reserv.map((item, index) => {
            return (
              <tbody key={item._id}>
                <tr>
                  <td>{index+1}</td>
                  <td>{item.fstvlDate}</td>
                  <td>{item.fstvlNm}</td>
                  <td>
                    {item.count.adult ? `성인 ${item.count.adult} ` : null}
                    {item.count.kids ? `어린이 ${item.count.kids} ` : null}
                    {item.count.child ? `유아 ${item.count.child} ` : null}
                  </td>
                  <td>{item.payType === 'card' ? `${item.payTotal}원 결제 완료(카드)` : `${item.payTotal}원 결제 완료(핸드폰)`}</td>    
                  <td className='last-td'><button className='cancel-btn' onClick={() => handleCancelPay(item._id)}>취소</button></td>
                </tr>
              </tbody>
            )
          })}
        </Table>

        <Modal
        size="sm"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        style={{marginTop: '180px'}}
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              경고
            </Modal.Title>
          </Modal.Header>
          <Modal.Body style={{fontWeight: 'bold'}}>결제를 취소하시겠습니까?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)} >
              닫기
            </Button>
            <Button variant="primary" onClick={handleSubmitCancelPay} >
              취소
            </Button>
        </Modal.Footer>
        </Modal>
      </ReservInfoContainer>
    </>
  );
} 

export default ReservInfo;