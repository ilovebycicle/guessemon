import React, { useState } from 'react';
import logo from './logo.png';
// import './App.css';

function StartMenu() {
  const [CacoSpin, SetCacoSpin] = useState(false);

  return (
      <header className="App-header">
        <img
          src={logo}
          onMouseEnter={() => SetCacoSpin(true)}
          onMouseLeave={() => SetCacoSpin(false)}
          className={ !CacoSpin ? "App-logo" : "App-logo-reversed" }
          alt="logo"
        />
          <h1 class="Main-text">Welcome to the hell, marine!</h1>
        <button class="Button Button-start">I'm too young to die!</button>
      </header>
  );
}

export default StartMenu;
