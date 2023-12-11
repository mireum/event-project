import React, { useState, useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';

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
  <div>
    <h2>로그인</h2>
    <div>
        <label htmlFor='input_id'>아이디 : </label>
        <input type='text' name='input_id' value={inputId} onChange={handleInputId} />
    </div>
      <div>
        <label htmlFor='input_pw'>패스워드 : </label>
        <input type='password' name='input_pw' value={inputPw} onChange={handleInputPw} />
      </div>
        <div>
          <button type='button' onClick={onClickLogin}>로그인</button>
        </div>
  </div>
  )
}

export default Login;