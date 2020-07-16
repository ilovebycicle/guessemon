import React, { useState } from 'react';
import './App.css';
import StartMenu from './StartMenu.js';
import Quiz from './Quiz.js';

// function Quiz() {
//   return <p> Not ready yet! </p>
// }

function App() {
  const [buttonStartQuiz, setButtonStartQuiz] = useState(false);
  const numberOfQuestions = 5;
  const numberOfVariants = 3;
  const Quiz2 = <p> Not ready yet! </p>
  return (
    <div className="App Background-logo">{ !buttonStartQuiz ? <StartMenu setButtonStartQuiz={setButtonStartQuiz}></StartMenu> : <Quiz /> } </div> // <StartMenu></StartMenu> = <StartMenu />
  );
}

export default App;
