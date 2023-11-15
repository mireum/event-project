import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


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
  // console.log(props);
  const { item: { id, fstvlNm, image, fstvlStartDate, fstvlEndDate, lnmadr, rdnmadr } } = props;
  const navigate = useNavigate();
  
  return (
    <Col md={4} >
      <ItemImage
        className='cursor-pointer' 
        src={image}
        onClick={() => {
          navigate(`/detail/${id}`)
        }} 
      />
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