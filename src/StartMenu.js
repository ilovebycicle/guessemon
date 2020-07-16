import React, { useState } from 'react';
import logo from './logo.png';

function StartMenu(props) {
  const [cacoSpin, setCacoSpin] = useState(false);
  const [count, setCount] = useState(0);
  return (
      <header className="App-header">
        <img
          src={logo}
          onMouseEnter={() => setCacoSpin(true)}
          onMouseLeave={() => setCacoSpin(false)}
          className={ cacoSpin ? "App-logo-reversed" : "App-logo" }
          alt="logo"
        />
          <h1 className="Main-text">Welcome to the hell, marine!</h1>
  <button className="Button Button-start" onClick={() => { setCount(count + 1); props.setButtonStartQuiz(true)}}>I'm too young to die! {props.buttonNumber} {count}</button>
      </header>
  );
}

export default StartMenu;
