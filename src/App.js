import React, { useState } from 'react';
import './App.css';
import StartMenu from './StartMenu.js';
import Quiz from './Quiz.js';
import Test from './Test.js';
import Results from './Results.js';

import demonlist from './data/demonlist.json'

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
  { image: Demon_sprite, sounds: [dsbrsdth, dssgtatk, dsbossit], correctSoundIndex: 2},
  { image: Imp_sprite, sounds: [dsbgact, dstelept, dsdmpain], correctSoundIndex: 1},
  { image: Cacodemon_sprite, sounds: [dsfirxpl, dsskeact,dscacsit], correctSoundIndex: 3},
  { image: Cyberdemon_sprite, sounds: [dscybsit, dspodth1, dspstop], correctSoundIndex: 1},
  { image: Lostsoul_sprite, sounds: [dssawful, dssklatk, dsvipain], correctSoundIndex: 2},
]

// const randomQuestions = generateQuestions(randomDemonNames);

function App() {
  // quizState - состояние викторины
  // 0 - стартовое меню
  // 1 - вопросы викторины
  // 2 - вывод результатов
  const [quizState, setQuizState] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [score, setScore] = useState(0);

  const [hardDifficulty, setHardDifficulty] = useState(0); 
  // Использовние этого стейта необходимо
  // только если будет больше выборов сложностей
  
  const scoreHandling = () => {
    setScore(score + 1);
  }
  
  const nextQuestionHandling = () => {
    if (questionCount + 1 < mockQuestions.length) {
      setQuestionCount(questionCount + 1);
    }
    else
      setQuizState(2);
  }

  const resetQuiz = () => {
    setQuizState(0);
    setQuestionCount(0);
    setScore(0);
  }

  // Чтобы в квизе менялись картинки и звуки создана константа mockQuestions которая содержит массив (картинку, 3 звука, правильный выбор / звук) и
  // снизу в jsx добавили свойства (props) для функ. компонента Quiz (image, sounds, toggleNext - который активирует функцию перехода нового вопроса).
  // Это работает следующим образом: в Quiz при нажатии на Continue активируется toggleNext, который в свою очередь активирует nextQestionHandling, 
  // а уже он в свою очередь изменяет номер вопроса на +1 (и должен считать правильные ответы для странички результатов и вызывать её в конце).
  // Собственно от изменения questionCount и переходит смена картинок и звуков и всё проходит по новому кругу.

  let currentStateComponent = null;

  switch (quizState) {
    case 0: // рисуем стартовое меню
      currentStateComponent =
        <StartMenu
          setButtonStartQuiz={setQuizState}
          setHardDifficulty={setHardDifficulty}
        />
      break;
    case 1: // рисуем вопросы викторины
      currentStateComponent =
          <Quiz
            image={mockQuestions[questionCount].image}
            sounds={mockQuestions[questionCount].sounds}
            correctAnswer={mockQuestions[questionCount].correctSoundIndex}
            nextQuestion={nextQuestionHandling}
            toggleScore={scoreHandling}
            // {...console.log(hardDifficulty)} //трэк стэйта
          />
      break;
    case 2: // рисуем результаты
      currentStateComponent = 
      <Results
        score={score}
        resetQuiz={resetQuiz}
      />
      break;
    default:
      currentStateComponent = null;
    }
  return(
    <div className="App Background-logo">
      {currentStateComponent}
      <Alesha />
    </div>
  )
}

function arrayRandElement(arr) {
  let fiveRandDemons = [];

  for ( let i = 0; i < 5; i++) {

    let randIndex = Math.floor(Math.random() * arr.length);

    if (!fiveRandDemons.includes(arr[randIndex])) {
      fiveRandDemons.push(arr[randIndex]);
    } else {
      i--
    }
  }

    // if (fiveRandDemons.includes(["Shotgun Guy", "Zombieman"])) {
      // let indexOfZombies = fiveRandDemons.includes(["Shotgun Guy", "Zombieman"])
      // console.log(indexOfZombies);
    // }

  return fiveRandDemons;
}

function generateQuestions (demonNames) {

  let questionList = [];

  // Снизу в цикле for берётся каждый демон из уже зарандомленных, ищется его объект в json, и берём его картинку
  for (let demonName of demonNames) {
    let demonData = demonlist.find(item => item.name == demonName);
    let image = demonData.calmSprite;
    // if (typeof(image) == Array) Если массив с зомби и сержантом, то выбрать одного случайного
    let correctSound = demonData.sounds[Math.floor(Math.random() * demonData.sounds.length)];
    let incorrectSounds = [];

    let demonListWithoutCorrectDemon = demonlist.filter(item => item.name != demonName);

    console.group("Список без правильного");
    console.log(demonListWithoutCorrectDemon);
    console.groupEnd();

    while (incorrectSounds.length < numberOfVariants - 1) {
      let incorrectSound = getIncorrectSound(demonListWithoutCorrectDemon);

      if (!incorrectSounds.includes(incorrectSound)) {
        incorrectSounds.push(incorrectSound)
      }
    }

    let correctSoundIndex = (Math.floor(Math.random() * numberOfVariants) + 1);

    let sounds = [];

    sounds.push(...incorrectSounds);
    sounds.splice(correctSoundIndex - 1, 0, correctSound);

    console.group("Неправильные звуки");
    console.log(incorrectSounds);
    console.groupEnd();

    console.group("Объект правильного демона");
    console.log(demonData);
    console.groupEnd();

    questionList.push({ image: image, sounds: sounds, correctSoundIndex: correctSoundIndex});
  }

  console.group("questionList");
  console.log(questionList);
  console.groupEnd();

  return questionList
}

function getIncorrectSound (demonListWithoutCorrectDemon) {

  let randomIncorrectDemon = demonListWithoutCorrectDemon[Math.floor(Math.random() * demonListWithoutCorrectDemon.length)];

  let randomIncorrectSound = randomIncorrectDemon.sounds[Math.floor(Math.random() * randomIncorrectDemon.sounds.length)];

  return randomIncorrectSound;
}

let demonNames = demonlist.map(item => item.name);

let randomDemonNames = arrayRandElement(demonNames)

console.log(randomDemonNames);

generateQuestions(randomDemonNames)

// This function below is a test button for future

function Alesha() {
  return (
    <div>
      <button onClick={Test}>Ne trogai Aleshka!</button>
    </div>
  );
}

export default App;
