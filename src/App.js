import React, { useState } from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          className={ !isShown ? "App-logo" : "App-logo-reversed" }
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
