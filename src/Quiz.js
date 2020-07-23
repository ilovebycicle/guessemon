import React, { useState } from 'react';
import './App.css';
import Demon_sprite from './data/spr/Demon_sprite.png'
import useSound from 'use-sound';
import dsbrsdth from './data/snd/dsbrsdth.wav';
import dssgtatk from './data/snd/dssgtatk.wav';
import dsbossit from './data/snd/dsbossit.wav';

function Quiz() {
  const [isDisabledButtons, setIsDisabledButtons] = useState(false);
  const soundUrl1 = dsbrsdth;

  const [play1] = useSound(
    soundUrl1,
    { volume: 0.25, interrupt: true, onend: () => setIsDisabledButtons(false)}
  );

  const soundUrl2 = dssgtatk;

  const [play2] = useSound(
    soundUrl2,
    { volume: 0.25, interrupt: true, onend: () => setIsDisabledButtons(false)}
  );

  const soundUrl3 = dsbossit;

  const [play3] = useSound(
    soundUrl3,
    { volume: 0.25, interrupt: true, onend: () => setIsDisabledButtons(false)}
  );

  const buttonHandling = (soundToPlay) => {
    setIsDisabledButtons(true);
    soundToPlay();
  }

  return (
    <div className="Quiz-foundation">
      <div className='Sprite-box'>
        <img
          src={Demon_sprite} style={{backgroundSize: 'cover', height: '100%'}}>
        </img>
      </div>
        <div className ="Button-panel">
          <button className='Button-sound' onClick={() => buttonHandling(play1)} disabled={isDisabledButtons}>Sound 1</button>
          <button className='Button-sound' onClick={() => buttonHandling(play2)} disabled={isDisabledButtons}>Sound 2</button>
          <button className='Button-sound' onClick={() => buttonHandling(play3)} disabled={isDisabledButtons}>Sound 3</button>
      </div>
      <div className ="Button-panel">
          <button className='Button-sound'>Continue</button>
        </div>
    </div>
  )
}

export default Quiz;