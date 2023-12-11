import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Login.css'
import { Link } from 'react-router-dom';

function Login() {
  const [inputId, setInputId] = useState('')
  const [inputPw, setInputPw] = useState('')

  const handleInputId = (e) => {
    setInputId(e.target.value)
  }

  const handleInputPw = (e) => {
    setInputPw(e.target.value)
  }
  
  
  const onClickLogin = () => {
    console.log('click login')
  }
  
  useEffect(() => {
    axios.get('http://localhost:8088/login')
    .then(res => console.log(res))
    .catch((error) => {
      console.error(error);
    });
  },[])

return(
  <div className='main'>
    <div className='login-wrapper'>
      <h2>로그인</h2>
      <form method='post' action='/login' id='login-form'>
        <label htmlFor='input_id'>아이디 : </label>
        <input type='text' id='input_id' name='input_id' value={inputId} onChange={handleInputId} />
        <label htmlFor='input_pw'>패스워드 : </label>
        <input type='password' id='input_pw' name='input_pw' value={inputPw} onChange={handleInputPw} />
        <label htmlFor='remember-check'>
          <input type='checkbox' id='remember-check' />
          <span>아이디 저장하기</span>
        </label>
        <div className='btn-wrap'>
          <button type='submit' onClick={onClickLogin}>로그인</button>
        </div>
        <div className='register_link'>
          <p>회원이 아니신가요?</p>
          <Link to='/register' id='link'>회원가입</Link>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login;