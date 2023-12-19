import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectId, selectUsername, setUser } from '../features/userSlice';
import store from '../app/store';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');  
  const [email, setEmail] = useState('');
  
  const navigate = useNavigate();
  const { state } = useLocation();
  const dispatch = useDispatch();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username) {
      alert('아이디를 입력하세요')
    } else if (!password) {
      alert('비밀번호를 입력하세요')
    } else {
    try {
      const result = await axios.post(`http://43.200.245.38/user/login`, { username, password, email },{
        withCredentials: true
      });
      console.log(result.data);
      delete result.data.user.password;
      sessionStorage.setItem('user', JSON.stringify(result.data.user));

      dispatch(setUser({id:result.data.user._id, username:result.data.user.username, email:result.data.user.email}));

        if (result.data.user.username && state) {
          navigate(`${state.from.pathname}`);
        } else {
          navigate('/');
        }
      } catch (err) {
        console.log(err);
        alert(err.response.data);
      }
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
