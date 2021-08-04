import React, { useState } from 'react';
import './App.css';
import useSound from 'use-sound';

function AnswerButton(props) {

  const [hurlAcceleration, setHurlAcceleration] = useState(0);
  const generalVolume = 0.25;

  const [soundToPlay] = useSound(
    require(`${props.sound}`),
    {
      volume: generalVolume,
      interrupt: true,
      playbackRate: (props.sound.includes('dssgtatk') ? 0.8 + hurlAcceleration : 1), // Здесь код пасхалки, если звук хухурл то он ускоряется
      onend: () => props.disableButtonsHandler(false)
    }
  );


  const buttonHandling = () => {

    // пасхалка для хухурл acceleration
    if (props.sound.includes('dssgtatk')) {
      setHurlAcceleration(hurlAcceleration + 0.1);
    }

    props.selectedButtonHandler(props.index + 1);
    props.disableButtonsHandler(true);
    soundToPlay();
  }

  return (
          <button
          className={props.className}
          onClick={() => buttonHandling()}
          disabled={props.isDisabled}
        >
          Sound {props.index + 1}
        </button>
        )
}

export default AnswerButton;
