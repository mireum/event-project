import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Login.css'
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const result = await axios.post(`http://localhost:8088/user/login`, { username, password },{
        withCredentials: true
      });
      console.log(result); 
  
      if (!result.data.flag) {
        return alert(result.data.message);
      }
      // location.href = '/';
    } catch (err) {
      console.error(err);
    }
};


return(
  <div className='main'>
    <div className='login-wrapper'>
      <h2>로그인</h2>
      <form method='post' id='login-form' onSubmit={handleSubmit}>
        <label htmlFor='username'>아이디 : </label>
        <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} name="username" />
        <label htmlFor='password'>패스워드 : </label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" />
        <label htmlFor='remember-check'>
          <input type='checkbox' id='remember-check' />
          <span>아이디 저장하기</span>
        </label>
        <div className='btn-wrap'>
          <button type='submit'>로그인</button>
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
