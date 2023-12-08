import React, { useState, useEffect } from "react";
import axios from "axios";

function Login() {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  const hendleInputPw = (e) => {
    hendleInputPw(e.target.value);
  };

  const hendleInputId = (e) => {
    hendleInputId(e.target.value);
  };

  const onClickLogin = () => {
    console.log('click');
    console.log('click', inputId);
    console.log('click', inputPw);
    axios.post('/localhost:8080', null, {
      params: {
        'user.id': inputId,
        'user.Pw': inputPw,
      }
    })
    .then(res => {
      if (res.data.userId === undefined) {
        alert('입력하신 아이디가 일치하지 않습니다.')
      } else if (res.data.userId === null) {
        alert('입력하신 비밀번호가 일치하지 않습니다.')
      } else if (res.data.userId === inputId) {
        sessionStorage.setItem('user_id', inputId)
      }
      document.location.href = '/'
    })
    .catch()
  }
  useEffect(() => {
    axios.get('/')
    .then(res => console.log(res))
    .catch()
  },[])

  return (
    <div>
      <h2>로그인</h2>
      <div>
        <label htmlFor="input_id">아이디: </label>
        <input type="text" name="input_id" value={inputId} onChange={hendleInputId}></input>
      </div>
      <div>
        <label htmlFor='input_pw'>비밀번호 : </label>
        <input type='password' name='input_pw' value={inputPw} onChange={hendleInputPw} />
      </div>
      <div>
        <button type='button' onClick={onClickLogin}>로그안</button>
      </div>
    </div>
  )
}

export default Login;