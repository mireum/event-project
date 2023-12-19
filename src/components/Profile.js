import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectEmail, selectId, selectUsername, setUser } from '../features/userSlice';
import { useNavigate } from 'react-router';
import axios from 'axios';


const StyledContainer = styled(Container)`
  max-width: 1200px;
	margin: 0 auto;
	padding-top: 50px;
`;

const ProfileForm = styled.form`
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
    button + button {
      margin-left: 10px;
    }
  }
`;

function Profile(props) {
  const navigate = useNavigate();
  const id = useSelector(selectId);
  const name = useSelector(selectUsername);
  const email = useSelector(selectEmail);
  const dispatch = useDispatch();

  const resign = async (e) => {
    e.preventDefault();
    const check = window.confirm('정말 탈퇴하시겠습니까?');
    if (check) {
      const result = await axios.post('https://43.200.245.38/user/resign', {id});
      if (result.data.flag) {
        alert('탈퇴되었습니다!')
      }
      sessionStorage.clear();
      dispatch(setUser({ id: '', username: '', email: '' }))
      navigate('/');
    } else { return }
  };

  return (
    <StyledContainer>
      <ProfileForm>
        <h3>내 정보</h3>
          <label>
            이름
            <input type='text' placeholder={name} disabled/>
          </label>
          <label>
            이메일
            <input type='text' placeholder={email} disabled/>
          </label>
          <div className='buttonBox'>
           <button type='button' onClick={() => {navigate('/profile/reserv/info')}}>예약 확인</button>
          </div>
          <div className='buttonBox'>
            <button type='button' onClick={() => {navigate('/profilePw')}}>비밀번호 변경</button>
            <button type='button' onClick={resign}>회원 탈퇴</button>
          </div>

      </ProfileForm>
    </StyledContainer>
  );
}

export default Profile;