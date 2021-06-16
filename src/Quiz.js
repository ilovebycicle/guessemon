import React, { useState } from 'react';
import './App.css';
import useSound from 'use-sound';

function Quiz(props) {

  const [selectedButton, setSelectedButton] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isDisabledButtons, setIsDisabledButtons] = useState(false);
  const [hurlAcceleration, setHurlAcceleration] = useState(0);

  const correctAnswer = props.correctSound; // Здесь хардкод правильного ответа
  const generalVolume = 0.45;
  const delayBetweenQuestionsMs = 1500;

  // play1-2-3 объединить как-то

  const [play1] = useSound(
    props.sounds[0],
    { volume: generalVolume, interrupt: true, onend: () => setIsDisabledButtons(false) }
  );

  const [play2] = useSound(
    props.sounds[1],
    {
      volume: generalVolume,
      playbackRate: (props.sounds[1].includes('dssgtatk') ? 0.8 + hurlAcceleration : 1), // Здесь код пасхалки, если звук хухурл то он ускоряется
      interrupt: true, onend: () => setIsDisabledButtons(false)
    }
  );

  const [play3] = useSound(
    props.sounds[2],
    { volume: generalVolume, interrupt: true, onend: () => setIsDisabledButtons(false) }
  );

  const optionButtonClassName = (optionButtonNumber) => {
    if (optionButtonNumber === selectedButton) {
      if (isAnswered) {
        return (
          optionButtonNumber === correctAnswer ?
            'Button-sound Selected-button Right-answer' :
            'Button-sound Selected-button Wrong-answer'
        )
      }
      return (
        'Button-sound Selected-button'
      )
    }
    return (
      'Button-sound'
    )
  }

  const buttonHandling = (soundToPlay, number) => {
    soundToPlay === play2 && props.sounds[1].includes('dssgtatk') &&
      setHurlAcceleration(hurlAcceleration + 0.1);
    setSelectedButton(number);
    setIsDisabledButtons(true);
    soundToPlay();
  }

  const continueHandling = () => {
    setIsAnswered(true);
    setTimeout(() => {
      setIsAnswered(false);
      props.toggleNext();
      setSelectedButton(0);
    }, delayBetweenQuestionsMs);
    setHurlAcceleration(0);
  }

  return (
    <div className="Quiz-foundation">
      <div className='Sprite-box'>
        <img
          src={props.image} style={{ backgroundSize: 'cover', height: '100%' }}>
        </img>
      </div>
      <div className="Button-panel">
        <button
          className={optionButtonClassName(1)}
          onClick={() => buttonHandling(play1, 1)}
          disabled={isAnswered || isDisabledButtons}
        >
          Sound №1
        </button>
        <button
          className={optionButtonClassName(2)}
          onClick={() => buttonHandling(play2, 2)}
          disabled={isAnswered || isDisabledButtons}
        >
          Sound №2
        </button>
        <button
          className={optionButtonClassName(3)}
          onClick={() => buttonHandling(play3, 3)}
          disabled={isAnswered || isDisabledButtons}
        >
          Sound №3
        </button>
      </div>
      <div className="Button-panel">
        <button
          className='Button-sound'
          disabled={selectedButton === 0 || isAnswered}
          onClick={continueHandling}
        >
          Continue
        </button>
      </div>
    </div>
  )
}

export default Quiz;
