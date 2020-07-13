import React from 'react';
import './App.css';
import StartMenu from './StartMenu.js';

function App() {
  const buttonNotPressed = true;
  const numberOfQuestions = 5;
  const numberOfVariants = 3;
  const Quiz = <p> Not ready yet! </p>
  return (
    <div className="App Background-logo">{ buttonNotPressed ? <StartMenu></StartMenu> : <Quiz /> } </div> // <StartMenu></StartMenu> = <StartMenu />
  );
}

export default App;
