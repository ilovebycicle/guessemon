import React, { useState } from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="App Background-logo">
      <header className="App-header">
        <img
          src={logo}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          className={ !isShown ? "App-logo" : "App-logo-reversed" }
          alt="logo"
        />
          <h1 class="Main-text">Welcome to the hell marine!</h1>
        <button class="Button Button-start">I'm too young to die!</button>
      </header>
    </div>
  );
}

export default App;
