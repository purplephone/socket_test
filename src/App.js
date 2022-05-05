import './App.css';
import { useRef, useState } from 'react';

function App() {
  const chat = useRef(null)
  const [text, setText] = useState("")

  const toServer = () => {
    console.log("서버로")
  }
  
  // fromServer
  const receiveChat = (receiveText) => {
    chat.current.value += "받은 말:" +  receiveText + "\n"
  }

  const chatting = () => {
    // toServer
    toServer()

    chat.current.value += "보내는 말:" +  text + "\n"
    setText("")
  }


  return (
    <div className="App">
      <textarea ref={chat} rows="40" cols="50"></textarea>
      <hr></hr>
      입력 : <input value={text} onChange={(e) => {
        setText(e.target.value)
      }} type="text"></input>

      <button onClick={chatting}>버튼</button>
    </div>
  );
}

export default App;
