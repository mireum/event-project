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
  const [ pw, setPw ] = useState(''); 
  const [ email, setEmail ] = useState(''); 

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangePw = (e) => {
    setPw(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      if (!username || !password || !email) {
        return alert('회원정보를 입력해주세요!');
      } else if (password !== pw) {
        return alert('비밀번호가 일치하지 않습니다.');
      }

      // 회원가입 정규표현식 //
      const userid = document.getElementById('username');  
      const emails = document.getElementById('email');  
      
      const expIdText = /^[a-zA-Z0-9]{4,12}$/;
      if(!expIdText.test(userid.value)){      
      alert('아이디는 4자 이상 12자 이하의 대소문자로 시작하는 조합입니다');
      userid.focus();
      return false;
      }
      const expEmailText = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      if(!expEmailText.test(emails.value)){
      alert('이메일 형식을 확인하세요!');
      // emails.focus();
      return false;
      }
      if (expIdText && expEmailText) {
        const result = await axios.post('http://localhost:8088/user/register', { username, password, email });
        if (!result.data.flag) {
          return alert(result.data.message);
        }
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
        <label htmlFor='pw'>
          비밀번호
          <input type='password' name='pw' id='pw' autoComplete="off" value={pw} onChange={handleChangePw}/>
        </label>
        <label htmlFor="email">
          이메일
          <input type="email" id="email" name="email" value={email} onChange={handleChangeEmail}/>
        </label>
        <button type='submit' onClick={handleSubmit}>회원가입</button>
      </RegisterForm>
    </RegisterWrap>
  );
}

export default Register;