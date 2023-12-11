import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';


const RegisterWrap = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding-top: 50px;
  h3 {
    text-align: center;
    font-weight: bold;
    margin-bottom: 50px;
  }
`;

const RegisterForm = styled.form`
  width: 350px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  label {
    display: flex;
    justify-content: space-between;
    input {
      border: none;
      border-bottom: 1px solid #7a45e5;
      outline: none;
    }
  }
  label + label {
    margin-top: 15px;
  }
  button {
    width: 100px;
    border: none;
    background-color: #7a45e5;
    color: #fff;
    font-size: 20px;
    padding: 5px;
    border-radius: 5px;
    align-self: flex-end;
    margin-top: 20px;
  }
`;

// function Register(props) {
//   const [ inputs, setInput ] = useState({
//     username: '',
//     password: '',
//     pw: '',
//     email: ''
//   }); 

function Register(props) {
  const [ username, setUsername ] = useState(''); 
  const [ password, setPassword ] = useState(''); 
  const [ email, setEmail ] = useState(''); 

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userid = [...username];
    const emails = [...email];


    try {
      if (!username || !password || !email) {
        return alert('회원정보를 입력해주세요!');
      }

      // 회원가입 정규표현식 //
      
      const expIdText = /^[A-Za-z]{4,16}$/;
      if(!expIdText.test(JSON.stringify(userid.value))){      
      alert('아이디는 4자 이상 16자 이하의 대소문자로 시작하는 조합입니다');
      userid.focus();
      return false;
      }
      const expEmailText = /^[A-Za-z-0-9\-\]+@[A-Ja-z-0-9\-\]+.[A-Ja-z-0-9]+$/;
      if(!expEmailText.test(JSON.stringify(emails.value))){
      alert('이메일 형식을 확인하세요!');
      // emails.focus();
      return false;
      }

      const result = await axios.post('http://localhost:8088/user/register', { username, password, email });
      if (!result.data.flag) {
        return alert(result.data.message);
      }
    } catch (err) {
      console.error(err);
    }
    setUsername('');
    setPassword('');
    setPw('');
    setEmail('');
  };

  return (
    <RegisterWrap>
      <h3>회원가입</h3>
      <RegisterForm>
        <label htmlFor='username'>
          아이디
          <input type='text' name='username' id='username' value={username} onChange={handleChangeUsername}/>
        </label>
        <label htmlFor='password'>
          비밀번호
          <input type='password' name='password' id='password' autoComplete="off" value={password} onChange={handleChangePassword}/>
        </label>
        <label htmlFor="email">
          이메일
          <input type="text" id="email" name="email" value={email} onChange={handleChangeEmail}/>
        </label>
        <button type='submit' onClick={handleSubmit}>회원가입</button>
      </RegisterForm>
    </RegisterWrap>
  );
}

export default Register;