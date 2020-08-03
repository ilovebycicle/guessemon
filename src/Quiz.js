import React, { useState } from 'react';
import './App.css';
import Demon_sprite from './data/spr/Demon_sprite.png'
import Imp_sprite from './data/spr/Imp_sprite.png'
import useSound from 'use-sound';
import dsbrsdth from './data/snd/dsbrsdth.wav';
import dssgtatk from './data/snd/dssgtatk.wav';
import dsbossit from './data/snd/dsbossit.wav';

function Quiz(props) {
  const [selectedButton, setSelectedButton] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isDisabledButtons, setIsDisabledButtons] = useState(false);
  const [hurlAcceleration, setHurlAcceleration] = useState(0);

  const soundUrl1 = dsbrsdth;
  const correctAnswer = 2;

  const [play1] = useSound(
    soundUrl1,
    { volume: 0.25, interrupt: true, onend: () => setIsDisabledButtons(false) }
  );

  const soundUrl2 = dssgtatk;

  const [play2] = useSound(
    soundUrl2,
    { volume: 0.25, playbackRate: 0.8 + hurlAcceleration, interrupt: true, onend: () => setIsDisabledButtons(false) }
  );

  const soundUrl3 = dsbossit;

  const [play3] = useSound(
    soundUrl3,
    { volume: 0.25, interrupt: true, onend: () => setIsDisabledButtons(false) }
  );

  const optionButtonClassName = (optionButtonNumber) => {
    if (optionButtonNumber == selectedButton) {
      if (isAnswered) {
        return (
          optionButtonNumber == correctAnswer ? 'Button-sound Selected-button Right-answer' : 'Button-sound Selected-button Wrong-answer'
        )
      }
      return(
        'Button-sound Selected-button'
      )
    }
    return(
      'Button-sound'
    )
  }

  // const imageHandling = (questionCount) => {
  //   if (questionCount == 1)
  //     <div className='Sprite-box'> 
  //       <img
  //         src={Demon_sprite} style={{ backgroundSize: 'cover', height: '100%' }}>
  //       </img>
  //     </div>
  //   if (questionCount == 2)
  //   <div className='Sprite-box'> 
  //     <img
  //       src={props.image} style={{ backgroundSize: 'cover', height: '100%' }}>
  //     </img>
  //   </div>

  // }

  const buttonHandling = (soundToPlay, number) => {
    setSelectedButton(number);
    setIsDisabledButtons(true);
    soundToPlay();
  }

  const continueHandling = () => {
    setIsAnswered(true);
    setTimeout(setIsAnswered, 3000, false);
    setHurlAcceleration(0);
    props.toggleNext();
  }

  return (
    <div className="Quiz-foundation">
      <div className='Sprite-box'>
        <img
          src={Demon_sprite} style={{ backgroundSize: 'cover', height: '100%' }}>
        </img>
      </div>
      <div className="Button-panel">
        <button className={optionButtonClassName(1)} onClick={() => buttonHandling(play1, 1)} disabled={isAnswered || isDisabledButtons}>Sound №1</button>
        <button className={optionButtonClassName(2)} onClick={() => buttonHandling(play2, 2)>setHurlAcceleration(hurlAcceleration + 0.1)} disabled={isAnswered || isDisabledButtons}>Sound №2</button>
        <button className={optionButtonClassName(3)} onClick={() => buttonHandling(play3, 3)} disabled={isAnswered || isDisabledButtons}>Sound №3</button>
      </div>
      <div className="Button-panel">
        <button className='Button-sound' disabled={selectedButton == 0 || isAnswered} onClick={continueHandling} >Continue</button>
      </div>
    </div>
  )
}

export default Quiz;
