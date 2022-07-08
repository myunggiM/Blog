import logo from './porkBelly.jpg';
import './App.css';

function App() {
  let posts ='송파구 고기 맛집';
  let postsCss = {color:'white' ,fontSize :'30px'};
  function 함수(num){
    return num
  }
  return (
    <div className="App"> 
      <div className="black-nav"> {/*JSX 에서 class는 js , className 은 html,css */}
        <div style={postsCss}>개발 Blog</div>
      </div>
      <h4>{posts} top { 함수(10) }</h4>
      <img src={logo}></img>
    </div>
  );
}

export default App;
