/* eslint-disable */ // warning message 안뜨게 하는법

//import logo from './porkBelly.jpg';
import './App.css';
import { useState } from 'react';

function App() {
  // let posts ='송파구 고기 맛집';
  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);  // 쓰는 이유 : 변수는 값이 바뀌면 html 이 재랜더링이 안되나 , state는 바뀌면 바로 재랜더링이 된다. 변동시 자동으로 html 에 반영되게 만들고 싶을때 쓰셈.
  let[좋아요,좋아요변경] = useState(0);
  //let [a,c] =[1,2]; // Destructring 문법 a=1, c=2
  let postsCss = {color:'white' ,fontSize :'30px'};

  return ( // return () 안에는 병렬로 태그 2개이상 기입금지 <div></div> <div></div>
    <div className="App"> 
      <div className="black-nav"> {/*JSX 에서 class는 js , className 은 html,css */}
        <div style={postsCss}>ReactBlog</div>
      </div>
      <button onClick={()=>{
        let copy2 =[...글제목];
        copy2= copy2.sort();
        글제목변경(copy2);
        console.log(copy2);
      }}>가나다순정렬</button>
      <button onClick={() =>{
         let copy =  [...글제목]; {/* ... : 괄호 벗겨주세요. []: 괄호를 다시 씌워주세요 */}
         copy[0] = '여자코트 추천';
         글제목변경(copy);
      }}> 글수정</button> {/* state 변경함수 특징: 기존 state =신규 state 의 경우 변경 안해줌 : 글제목이란 변수 및 글제목이 가리키는 array 화살표 둘다 안바뀜 */}
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
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </div>
    
  );
}

export default App;
