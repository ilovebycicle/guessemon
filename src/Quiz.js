import React, { useState } from 'react';
import './App.css';
import useSound from 'use-sound';

function Quiz(props) {

  const [selectedButton, setSelectedButton] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isDisabledButtons, setIsDisabledButtons] = useState(false);
  const [hurlAcceleration, setHurlAcceleration] = useState(0);

  const { correctAnswer, sounds } = props; // const correctAnswer = props.correctAnswer; sounds = props.sounds;
  const generalVolume = 0.25;
  const delayBetweenQuestionsMs = 1500;

  // play1-2-3 объединить как-то

  const [play1] = useSound(
    require(`${props.sounds[0]}`),
    {
      volume: generalVolume,
      interrupt: true,
      onend: () => setIsDisabledButtons(false)
    }
  );

  const [play2] = useSound(
    require(`${props.sounds[1]}`),
    {
      volume: generalVolume,
      playbackRate: (sounds[1].includes('dssgtatk') ? 0.8 + hurlAcceleration : 1), // Здесь код пасхалки, если звук хухурл то он ускоряется
      interrupt: true,
      onend: () => setIsDisabledButtons(false)
    }
  );

  const [play3] = useSound(
    require(`${props.sounds[2]}`),
    {
      volume: generalVolume,
      interrupt: true,
      onend: () => setIsDisabledButtons(false)
    }
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

  const buttonHandling = (number) => {
    let soundToPlay = null;
    switch (number) {
      case 1:
        soundToPlay = play1;
        break;
      case 2:
        soundToPlay = play2;
        break;
      case 3:
        soundToPlay = play3;
        break;
    }
    // пасхалка для хухурл acceleration
    soundToPlay === play2 && sounds[1].includes('dssgtatk') &&
      setHurlAcceleration(hurlAcceleration + 0.1);

    setSelectedButton(number);
    setIsDisabledButtons(true);
    soundToPlay();
  }

  const continueHandling = () => {
    if (correctAnswer === selectedButton) {
      props.toggleScore();
    } 
    setIsAnswered(true);
    setTimeout(() => {
      setIsAnswered(false);
      props.nextQuestion();
      setSelectedButton(0);
    }, delayBetweenQuestionsMs);
    setHurlAcceleration(0);
  }

console.group("Картинки")
console.log(props.image)
console.groupEnd()

  return (
    <div className="Quiz-foundation">
      <div className='Sprite-box'>
        <img
          src={require(`${props.image}`)} style={{ backgroundSize: 'cover', height: '100%' }}>
        </img>
      </div>
      <div className="Button-panel">
        {props.sounds.map( (elem,index) =>
          <button
          className={optionButtonClassName(index+1)}
          onClick={() => buttonHandling(index+1)}
          disabled={isAnswered || isDisabledButtons}
        >
          Sound {index + 1}
        </button>
        )}
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
