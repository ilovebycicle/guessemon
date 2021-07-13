import React, { useState } from 'react';
import logo from './logo.png';

function StartMenu(props) 
{
  const [cacoSpin, setCacoSpin] = useState(false);
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
            <button className="Button Button-start"
              onClick={() => 
              {props.setButtonStartQuiz(1)}}>
                I'm too young to die!</button>
            <button className="Button Button-start" 
              onClick={() => 
                {props.setButtonStartQuiz(1); props.setHardDifficulty(1)}}>
                  Hurt me plenty</button>
      </header>
  );
}

export default StartMenu;
