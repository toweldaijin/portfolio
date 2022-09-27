
import './App.css';
import { Contents } from './Contents';

function App() {
  
  return(
    <><div className="content">
      <div className="name">
        <h2>🌼小金丸彩華🌼</h2>
        
      </div>

      <div className="education">
        <h3>経歴</h3>
        <p>2018.4~2022.9</p>
        <p>関西大学　総合情報学部</p>
      </div>

      <div className="works">
        <h3>作成物</h3>
        <a href='https://ryugakupedia-801d4.web.app/'>留学サプリ</a>
        <p>フロントエンド:React</p>
        <p>バックエンド:firebase</p>
      </div>

      <div className="skills">
        <h3>スキル</h3>
        <ul>
          <li>HTML/CSS</li>
          <li>React</li>
          <li>firebase</li>
          <li>github</li>
          <li>R</li>
        </ul>
      </div>
          
      </div>
    </>
  )
}

export default App;
