import React, { useState } from 'react';
import './App.css';
import StartMenu from './StartMenu.js';
import Quiz from './Quiz.js';
import Test from './Test.js';
import Results from './Results.js';
import Volume from './Volume.js';

import demonlist from './data/demonlist.json'

const filesPrefix = "./data";

const mockQuestions = [
  { image: './data/spr/Demon_sprite.png', sounds: ['./data/snd/dsbrsdth.wav', './data/snd/dssgtatk.wav', './data/snd/dsbossit.wav'], correctSoundIndex: 2},
  { image: './data/spr/Imp_sprite.png', sounds: ['./data/snd/dsbgact.wav', './data/snd/dstelept.wav', './data/snd/dsdmpain.wav'], correctSoundIndex: 1},
  { image: './data/spr/Cacodemon_sprite.png', sounds: ['./data/snd/dsfirxpl.wav', './data/snd/dsskeact.wav','./data/snd/dscacsit.wav'], correctSoundIndex: 3},
  { image: './data/spr/Cyberdemon_sprite.png', sounds: ['./data/snd/dscybsit.wav', './data/snd/dspodth1.wav', './data/snd/dspstop.wav'], correctSoundIndex: 1},
  { image: './data/spr/Lostsoul_sprite.png', sounds: ['./data/snd/dssawful.wav', './data/snd/dssklatk.wav', './data/snd/dsvipain.wav'], correctSoundIndex: 2},
]

function arrayRandElement(arr,numberOfElements) {
  let fiveRandDemons = [];

  for ( let i = 0; i < numberOfElements; i++) {

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

function generateQuestions (demonNames, numberOfAnswers) {

  let questionList = [];

  // Снизу в цикле for берётся каждый демон из уже зарандомленных, ищется его объект в json, и берём его картинку
  for (let demonName of demonNames) {
    let demonData = demonlist.find(item => item.name === demonName);
    let image = demonData.calmSprite;
    if (Array.isArray(image)) {
      image = image[Math.floor(Math.random() * image.length)];
    } //Если массив с зомби и сержантом, то выбрать одного случайного
    let correctSound = demonData.sounds[Math.floor(Math.random() * demonData.sounds.length)];
    let incorrectSounds = [];

    let demonListWithoutCorrectDemon = demonlist.filter(item => item.name !== demonName);

    // console.group("Список без правильного");
    // console.log(demonListWithoutCorrectDemon);
    // console.groupEnd();

    while (incorrectSounds.length < numberOfAnswers - 1) {
      let incorrectSound = getIncorrectSound(demonListWithoutCorrectDemon);

      if (!incorrectSounds.includes(incorrectSound)) {
        incorrectSounds.push(incorrectSound)
      }
    }

    let correctSoundIndex = (Math.floor(Math.random() * numberOfAnswers) + 1);

    let sounds = [];

    sounds.push(...incorrectSounds);
    sounds.splice(correctSoundIndex - 1, 0, correctSound);

    // console.group("Неправильные звуки");
    // console.log(incorrectSounds);
    // console.groupEnd();

    // console.group("Объект правильного демона");
    // console.log(demonData);
    // console.groupEnd();
    image = filesPrefix + image;

    sounds = sounds.map(sound => sound = filesPrefix + sound);

    questionList.push({ image, sounds, correctSoundIndex });
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

function App() {
  // quizState - состояние викторины
  // 0 - стартовое меню
  // 1 - вопросы викторины
  // 2 - вывод результатов
  const [quizState, setQuizState] = useState(0);
  const [questionCount, setQuestionCount] = useState(0);
  const [score, setScore] = useState(0);
  const [questionList, setQuestionList] = useState([]);

  // const [difficulty, setDifficulty] = useState(0); 
  // Использовние этого стейта необходимо
  // только если будет больше выборов сложностей

  const setQuestionListBasedOnDifficulty = (difficulty) => {
    const FullListOfDemonNames = demonlist.map(item => item.name);
    let randomDemonNames = [];

    switch (difficulty) {
      case 0:
        setQuestionList(mockQuestions)
        break;
      case 1:
        randomDemonNames = arrayRandElement(FullListOfDemonNames, 5);
        setQuestionList(generateQuestions(randomDemonNames, 3));
        break;
      case 2:
        randomDemonNames = arrayRandElement(FullListOfDemonNames, 6);
        setQuestionList(generateQuestions(randomDemonNames, 4));
        break;
      case 3:
        randomDemonNames = arrayRandElement(FullListOfDemonNames, 8);
        setQuestionList(generateQuestions(randomDemonNames, 5));
        break;
    }
    setQuizState(1);
  }
  
  const scoreHandling = () => {
    setScore(score + 1);
  }
  
  const nextQuestionHandling = () => {
    if (questionCount + 1 < questionList.length) {
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
          // setButtonStartQuiz={setQuizState}
          // setDifficulty={setDifficulty}
          setQuestionListBasedOnDifficulty={setQuestionListBasedOnDifficulty}
        />
      break;
    case 1: // рисуем вопросы викторины
      currentStateComponent =
          <Quiz
            image={questionList[questionCount].image}
            sounds={questionList[questionCount].sounds}
            correctAnswer={questionList[questionCount].correctSoundIndex}
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
      <header className="App-header">
        <Volume />
        {currentStateComponent}
      </header>
      <Test />
    </div>
  )
}


export default App;
