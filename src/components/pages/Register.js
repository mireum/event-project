import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
      /* border-radius: 5px; */
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

function Register(props) {
  const [ inputs, setInput ] = useState({
    username: '',
    password: '',
    pw: '',
    email: ''
  }); 

  const { username, password, pw, email } = inputs;

  // useEffect(() => {
  //   if (!inputs) {
  //     setInput();
  //   }
  // }, []);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
    e.preventDefault();
      await axios.post('http://localhost:8088/user/register', { username, password, pw, email });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <RegisterWrap>
      <h3>회원가입</h3>
      <RegisterForm>
        <label htmlFor='username'>
          아이디
          <input type='text' name='username' id='username' value={username} onChange={handleChange}/>
        </label>
        <label htmlFor='password'>
          비밀번호
          <input type='password' name='password' id='password' autoComplete="off" value={password} onChange={handleChange}/>
        </label>
        <label htmlFor='pw'>
          비밀번호 확인
          <input type='password' name='pw' id='pw' autoComplete="off" value={pw} onChange={handleChange}/>
        </label>
        <label htmlFor="email">
          이메일
          <input type="email" id="email" name="email" placeholder="'@'를 포함해주세요" value={email} onChange={handleChange}/>
        </label>
        <button type='submit' onClick={() => {handleSubmit()}}>회원가입</button>
      </RegisterForm>
    </RegisterWrap>
  );
}

export default Register;