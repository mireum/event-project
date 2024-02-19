import { useState } from "react";
import axios from 'axios';
// import ReactHtmlParser from 'html-react-parser';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import '../Board.css';
import { useSelector } from "react-redux";
import { selectUsername } from "../features/userSlice";
import { useNavigate } from "react-router";

const SERVER_ADDR = process.env.REACT_APP_SERVER_ADDR;

function Board () {
  const navigate = useNavigate();
  const named = useSelector(selectUsername);
  const [boardContent, setBoardContent] = useState({
    title: '',
    content: '',
    view: 0,
  });

  const submitReview = async (e) => {
    e.preventDefault();
    try {
      const today = new Date();
      
      // const formattedDate = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

      const result = await axios.post(`${SERVER_ADDR}/board`, {
        title: boardContent.title,
        content: boardContent.content,
        date: today,
        view: boardContent.view,
        writer: named
      })
      if (result.data.flag) {
        alert('등록 완료!');
      }
    } catch (err) {
      console.error(err);
    }
    navigate('/board/list');
  };

  const getValue = e => {
    const { name, value } = e.target;
    setBoardContent({
      ...boardContent,
      [name]: value
    })
  };

  return (
  <div id="board-form">
    <div className="board">
      <h1>게시판</h1>
      <div className='board-container'>
      </div>
      <div className='form-wrapper'>
        <input className="title-input"
          type='text'
          placeholder='제목'
          onChange={getValue}
          name='title'
          />
        <CKEditor
          editor={ClassicEditor}
          data=''
          onReady={editor => {
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setBoardContent({
              ...boardContent,
              content: data
            })
          }}
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
          />
      </div>
      <button className="submit-button" onClick={submitReview} >입력</button>
    </div>
  </div>
  );
};

export default Board;