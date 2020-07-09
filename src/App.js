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
        <p style={{textAlign: "center"}}>
          <h1>Welcome to the hell marine!</h1>
        </p>
        <button class="button button3">I'm too young to die!</button>
      </header>
    </div>
  );
}

export default App;
