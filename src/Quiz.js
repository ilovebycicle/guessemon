import React, { useState } from 'react';
import logo from './logo.png';
import './App.css';
import Demon_sprite from './data/spr/Demon_sprite.png'

function Quiz() {
  return (
    <div className="Quiz-foundation">
      <div className='Sprite-box'>
        <img
          src={Demon_sprite} style={{backgroundSize: 'cover', height: '100%'}}>
        </img>
      </div>
        <div className ="Button-panel">
          <button className='Button-sound'>Sound 1</button>
          <button className='Button-sound'>Sound 2</button>
          <button className='Button-sound'>Sound 3</button>
      </div>
    </div>
  )
}

export default Quiz;