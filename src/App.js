import React, { useState } from 'react';
import './App.css';
import StartMenu from './StartMenu.js';
import Quiz from './Quiz.js';
import Test from './Test.js';

import Demon_sprite from './data/spr/Demon_sprite.png';

import dsbrsdth from './data/snd/dsbrsdth.wav';
import dssgtatk from './data/snd/dssgtatk.wav';
import dsbossit from './data/snd/dsbossit.wav';


import Imp_sprite from './data/spr/Imp_sprite.png';

import dsbgact from './data/snd/dsbgact.wav';
import dstelept from './data/snd/dstelept.wav';
import dsdmpain from './data/snd/dsdmpain.wav';


import Cacodemon_sprite from './data/spr/Cacodemon_sprite.png';

import dsfirxpl from './data/snd/dsfirxpl.wav';
import dsskeact from './data/snd/dsskeact.wav';
import dscacsit from './data/snd/dscacsit.wav';


import Cyberdemon_sprite from './data/spr/Cyberdemon_sprite.png';

import dscybsit from './data/snd/dscybsit.wav';
import dspodth1 from './data/snd/dspodth1.wav';
import dspstop from './data/snd/dspstop.wav';


import Lostsoul_sprite from './data/spr/Lostsoul_sprite.png';

import dssawful from './data/snd/dssawful.wav';
import dssklatk from './data/snd/dssklatk.wav';
import dsvipain from './data/snd/dsvipain.wav';

const numberOfQuestions = 5;
const numberOfVariants = 3;

const mockQuestions = [
  { image: Demon_sprite, sounds: [dsbrsdth, dssgtatk, dsbossit], correctSound: 2},
  { image: Imp_sprite, sounds: [dsbgact, dstelept, dsdmpain], correctSound: 1},
  { image: Cacodemon_sprite, sounds: [dsfirxpl, dsskeact,dscacsit], correctSound: 3},
  { image: Cyberdemon_sprite, sounds: [dscybsit, dspodth1, dspstop], correctSound: 1},
  { image: Lostsoul_sprite, sounds: [dssawful, dssklatk, dsvipain], correctSound: 2},
]

function App() {
  const [buttonStartQuiz, setButtonStartQuiz] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  
  const nextQuestionHandling = () => {
    setQuestionCount(questionCount + 1);
  }

// Чтобы в квизе менялись картинки и звуки создана константа mockQuestions которая содержит массив (картинку, 3 звука, правильный выбор / звук) и
// снизу в jsx добавили свойства (props) для функ. компонента Quiz (image, sounds, toggleNext - который активирует функцию перехода нового вопроса).
// Это работает следующим образом: в Quiz при нажатии на Continue активируется toggleNext, который в свою очередь активирует nextQestionHandling, 
//  а уже он в свою очередь изменяет номер вопроса на +1 (и должен считать правильные ответы для странички результатов и вызывать её в конце).
//  Собственно от изменения questionCount и переходит смена картинок и звуков и всё проходит по новому кругу.

  return (
    <div className="App Background-logo">
      { !buttonStartQuiz 
        ? <StartMenu setButtonStartQuiz={setButtonStartQuiz} /> // <StartMenu></StartMenu> = <StartMenu />
        : <Quiz image={mockQuestions[questionCount].image} sounds={mockQuestions[questionCount].sounds} toggleNext={nextQuestionHandling} />
      }
      <Alesha />
    </div>
  );
}

// This function below is a test button for future

function Alesha() {
  return (
  <div>
  <button onClick={Test}>Ne trogai Aleshka!</button>
  </div>
  );
}

export default App;
