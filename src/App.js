import React, { useState } from 'react';
import './App.css';
import StartMenu from './StartMenu.js';
import Quiz from './Quiz.js';
import Test from './Test.js';

function App() {
  const [buttonStartQuiz, setButtonStartQuiz] = useState(false);
  const numberOfQuestions = 5;
  const numberOfVariants = 3;
  const Quiz2 = <p> Not ready yet! </p>
  return (
    <div className="App Background-logo">{ !buttonStartQuiz ? <StartMenu setButtonStartQuiz={setButtonStartQuiz}></StartMenu> : <Quiz /> } <Somes /> </div> // <StartMenu></StartMenu> = <StartMenu />
  );
}

function Somes() {
  return (
  <div>
  <button onClick={Test}>Don't touch blyat'!</button>
  </div>
  );
}

export default App;
