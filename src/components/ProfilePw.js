import axios from 'axios';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectId } from '../features/userSlice';
import { useNavigate } from 'react-router';


const StyledContainer = styled(Container)`
  max-width: 1200px;
	margin: 0 auto;
	padding-top: 50px;
`;

const ProfileForm = styled.div`
  border: 1px solid #eee;
  width: 400px;
  padding: 40px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  margin: 0 auto;
  h3 {
    font-weight: bold;
    margin-bottom: 20px;
    font-size: 32px;
    color: #6A24FE;
  }
  label {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    color: #999999;
    input {
      width: 100%;
      outline: none;
      background-color: #F8F8F8;
      height: 48px;
      padding: 0 10px;
      border-radius: 6px;
      box-sizing: border-box;
    }
  }
  label + label {
    margin-top: 15px;
  }
  .buttonBox {
    display: flex;
    justify-content: end;
    button {
      width: 50%;
      border: none;
      background-color: #6A24FE;
      color: #fff;
      font-size: 16px;
      padding: 5px 0;
      margin-top: 20px;
      border-radius: 5px;
    }
  }
`;

function ProfilePw(props) {
  const [password, setPassword] = useState('');
  const [confirmWord, setConfirmWord] = useState('');
  const id = useSelector(selectId);
  const navigate = useNavigate();

  const newPw = async (e) => {
    e.preventDefault();
    if (!password || !confirmWord) {
      return alert('새로운 비밀번호를 입력해주세요!');
    }
    if (password == confirmWord) {
      const result = await axios.post('http://43.200.245.38/user/profilePw', {id, password});
      if (result.data.flag) {
        navigate('/');
      }
    }
  };

  return (
    <StyledContainer>
      <ProfileForm>
        <h3>비밀번호 변경</h3>
          <label>
            새로운 비밀번호
            <input type='password' value={password} name='password' onChange={(e) => {setPassword(e.target.value)}}/>
          </label>
          <label>
            새로운 비밀번호 확인
            <input type='password' value={confirmWord} onChange={(e) => {setConfirmWord(e.target.value)}} />
          </label>
          <div className='buttonBox'>
            <button onClick={newPw}>비밀번호 저장</button>
          </div>
      </ProfileForm>
    </StyledContainer>
  );
}

export default ProfilePw;