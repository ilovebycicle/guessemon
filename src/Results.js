import React, { useState } from 'react';
import logo from './logo.png';

function Results() 
{
  const [cacoSpin, setCacoSpin] = useState(false);
  return (
      <header className="App-header">
        <img
          src={logo}
          onMouseEnter={() => setCacoSpin(true)}
          onMouseLeave={() => setCacoSpin(false)}
          className={ !cacoSpin ? "App-logo-reversed" : "App-logo" }
          alt="logo"
        />
          <h1 className="Main-text">Results</h1>
      </header>
  );
}

export default Results;
