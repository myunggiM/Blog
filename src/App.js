/* eslint-disable */ // warning message 안뜨게 하는법

//import logo from './porkBelly.jpg';
import './App.css';
import { useState } from 'react';

function App() {
  // let posts ='송파구 고기 맛집';
  let [글제목] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);  // 쓰는 이유 : 변수는 값이 바뀌면 html 이 재랜더링이 안되나 , state는 바뀌면 바로 재랜더링이 된다. 변동시 자동으로 html 에 반영되게 만들고 싶을때 쓰셈.
  let[좋아요,좋아요변경] = useState(0);
  //let [a,c] =[1,2]; // Destructring 문법 a=1, c=2
  let postsCss = {color:'white' ,fontSize :'30px'};

  function 함수(){
    console.log(1);
  }

  return ( // return () 안에는 병렬로 태그 2개이상 기입금지 <div></div> <div></div>
    <div className="App"> 
      <div className="black-nav"> {/*JSX 에서 class는 js , className 은 html,css */}
        <div style={postsCss}>ReactBlog</div>
      </div>
      <div className="list">
        <h4>{ 글제목[0] }<span onClick={ () => { 좋아요변경(좋아요+1) }}>👍</span> { 좋아요 }</h4>  {/* onClick 안에는 함수만 가능하다. */}
        <p>7월 9일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>7월 10일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>7월 9일 발행</p>
      </div>
  
    </div>
    
  );
}

export default App;
