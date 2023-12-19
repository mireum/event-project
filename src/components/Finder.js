import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getFindWord } from '../features/findSlice';
import axios from 'axios';

const SectionBox = styled.div`
  width: 100%;
  /* height: 100vh; */
  /* position: fixed; */
`;

const FinderContainer = styled.div`
  width: 100%;
  /* height: 170px; */
  z-index: 999;
  /* position: absolute;
  top: 105%;
  left: 8%; */
  /* background: #F8F9FF; */
  /* padding: 20px; */
  box-sizing: border-box;
  border-radius: 10px;
  #input {
    font-size: 14px;
    /* outline-color: #7a45e5; */
    box-sizing: border-box;
  }
  #input:focus {
    /* outline: 2px solid #7a45e5; */
    box-shadow: 0 0 0 0.1rem #7a45e5;
    
  }
`;

const StyledSubmitBtn = styled(Button)`
  &:hover {
    box-sizing: border-box;
    background: #7a45e5;
  }
`;


function Finder(props) {
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const inputEl = useRef(null);
  const { setShowFind, setShow } = props;

	useEffect(() => {
		inputEl.current.focus();
	}, []);
  
  const handleSubmit = async () => {
    navigate('/find');
    setShowFind(false);
    dispatch(getFindWord(value));
  };
  
  const handleClick = () => {
    setShowFind(false);
  };

  return (
    <SectionBox onClick={() => {handleClick()}}>
      <FinderContainer onClick={(e) => e.stopPropagation()}>
        <InputGroup className="mb-3">
          <Form.Control
            ref={inputEl}
            placeholder="검색어를 입력해주세요"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            value={value}
            onChange={(e)=>{setValue(e.target.value)}}
            onKeyUp={(e) => { if (e.key === 'Enter') {handleSubmit()} }}
            id='input'
          />
          <StyledSubmitBtn variant="outline-secondary" id="button-addon2" onClick={() => {
            handleSubmit();
            setShow()}}
            >
            검색
          </StyledSubmitBtn>
        </InputGroup>
      </FinderContainer>

    </SectionBox>
  );
}

export default Finder;
