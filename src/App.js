//import logo from './porkBelly.jpg';
import './App.css';
import { useState } from 'react';

function App() {
  // let posts ='송파구 고기 맛집';
  let [글제목1] = useState('남자 코트 추천');  // 쓰는 이유 : 변수는 값이 바뀌면 html 이 재랜더링이 안되나 , state는 바뀌면 바로 재랜더링이 된다. 변동시 자동으로 html 에 반영되게 만들고 싶을때 쓰셈.
  let [글제목2] = useState('강남 우동 맛집'); 
  let [글제목3] = useState('파이썬 독학'); 
  //let [a,c] =[1,2]; // Destructring 문법 a=1, c=2
  let [글제목4] = useState(['강남 라면 맛집','송파 라면 맛집']); 
  let postsCss = {color:'white' ,fontSize :'30px'};
  return ( // return () 안에는 병렬로 태그 2개이상 기입금지 <div></div> <div></div>
    <div className="App"> 
      <div className="black-nav"> {/*JSX 에서 class는 js , className 은 html,css */}
        <div style={postsCss}>ReactBlog</div>
      </div>
      {/* <img alt="pork" src={logo}></img> {/* image 에 alt 를 써줘야한다. alt 는 이미지가 안나올때 대체할 단어다.*/} 
      <div className="list">
        <h4>{ 글제목1 }</h4>
        <p>7월 9일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목2 }</h4>
        <p>7월 10일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목3 }</h4>
        <p>7월 9일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목4[0] }</h4>
        <p>7월 9일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목4[1] }</h4>
        <p>7월 9일 발행</p>
      </div>
    </div>
    
  );
}

export default App;
