import React, { useState } from 'react';
import logo from './data/img/logo.png';

function Results(props) 
{
  const [cacoSpin, setCacoSpin] = useState(false);
  return (
    <>
        <img
          src={logo}
          onMouseEnter={() => setCacoSpin(true)}
          onMouseLeave={() => setCacoSpin(false)}
          className={ !cacoSpin ? "App-logo-reversed" : "App-logo" }
          alt="logo"
        />
          <h1 className="Main-text">Правильных ответов: {props.score}</h1>
          <button
            className="Button Button-start"
            onClick={() => props.resetQuiz()}
          >
            Вернуться в прошлое?
          </button>
    </>
  );
}

export default Results;
