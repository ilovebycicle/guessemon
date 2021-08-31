import React, { useState } from 'react';
import logo from './data/img/logo.png';

function StartMenu(props) 
{
  const [cacoSpin, setCacoSpin] = useState(false);
  return (
    <>
      <img
        src={logo}
        onMouseEnter={() => setCacoSpin(true)}
        onMouseLeave={() => setCacoSpin(false)}
        className={ cacoSpin ? "App-logo-reversed" : "App-logo" }
        alt="logo"
      />
      <h1 className="Main-text">Welcome to the hell, marine!</h1>
      <button 
        className="Button Button-start"
        onClick={() => 
          {props.setQuestionListBasedOnDifficulty(0)}}
      >
        I'm too young to die!
      </button>
      <button 
        className="Button Button-start" 
        onClick={() => 
          {props.setQuestionListBasedOnDifficulty(1)}}
      >
        Hey not too rough!
      </button>
      <button 
        className="Button Button-start" 
        onClick={() => 
          {props.setQuestionListBasedOnDifficulty(2)}}
      >
        Hurt me plenty!
      </button>
      <button 
        className="Button Button-start" 
        onClick={() => 
          {props.setQuestionListBasedOnDifficulty(3)}}
      >
        Ultra-violence!
      </button>
    </>
  );
}

export default StartMenu;
