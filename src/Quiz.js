import React, { useState } from 'react';
import './App.css';
import AnswerButton from './AnswerButton';

function Quiz(props) {

  const [selectedButton, setSelectedButton] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isDisabledButtons, setIsDisabledButtons] = useState(false);

  const {correctAnswer} = props; // const correctAnswer = props.correctAnswer
  const delayBetweenQuestionsMs = 1500;

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
          <AnswerButton
          key = {index}
          sound = {elem}
          index = {index}
          className = {optionButtonClassName(index + 1)}
          isDisabled = {isAnswered || isDisabledButtons}
          disableButtonsHandler = {setIsDisabledButtons}
          selectedButtonHandler = {setSelectedButton}
          generalVolume = {props.generalVolume}
          />
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