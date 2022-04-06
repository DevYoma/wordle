import React, { createContext, useState, useEffect } from 'react'; 
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Board from './Components/Board';
import Keyboard from './Components/Keyboard';
import { boardDefault, generateWordSet } from '../src/Utils/Word'
import GameOver from './Components/GameOver';


export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault)
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0, 
    letterPosition: 0
  })
  const [wordSet, setWordSet] = useState(new Set())
  const [disabledLetters, setDisabledLetters] = useState([])
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false
  })
// correct word state
const [correctWord, setCorrectWord] = useState("")


  // const correctWord = "RIGHT";

  useEffect(() => {
    generateWordSet().then((words) => {
      // console.log(words)
      setWordSet(words.wordSet)
      // generating the random word...
      setCorrectWord(words.todaysWord)
    })
  },[])

  // console.log(correctWord)

  const onEnter = () => {
    if(currentAttempt.letterPosition !== 5) return;

    setCurrentAttempt(prevCurrentAttempt => {
      return {
          attempt:  prevCurrentAttempt.attempt + 1,
          letterPosition: 0
      }
    })


    // the code below gets the entered words...
    let currentWord = ""
    for (let i = 0; i < 5; i++){
      currentWord += board[currentAttempt.attempt][i]; //very important line
    }

    console.log(currentWord.toLowerCase()) 
    // end of the code for showing entered words


    // WHEN THE USER GET'S THE VALUE
    if(currentWord.toLowerCase() === correctWord.toLowerCase()){
      alert("Wowwww, you got the right word...🚀")
      setGameOver({
        gameOver: true, 
        guessedWord: true
      })
      return
    }

    if(currentAttempt.attempt === 5){
      setGameOver({
        gameOver: true,
        guessedWord: false
      })
    }
  }

  const onSelectLetter = (keyVal) => {
    if(currentAttempt.letterPosition > 4) return;
    const currentBoard = [...board]
    currentBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyVal // i don't get this line... i think i get it a bit
    setBoard(currentBoard)

    setCurrentAttempt(prevCurrentAttempt => {
        return {
            ...prevCurrentAttempt,
            letterPosition: prevCurrentAttempt.letterPosition + 1
        }
    })

  }

  const onDelete = () => {
    if(currentAttempt.letterPosition === 0) return;

    const currentBoard = [...board];
    currentBoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = "" //this line removes the letter onClick of the Delete button...
    setBoard(currentBoard)
    setCurrentAttempt(prevCurrentAttempt => {
        return {
            ...prevCurrentAttempt,
            letterPosition: prevCurrentAttempt.letterPosition - 1
        }
    })
  }

 

  return (
    <div className="app">
      <Header />
      <AppContext.Provider 
        value={{
          board,
          setBoard, 
          currentAttempt, 
          setCurrentAttempt, 
          onSelectLetter, 
          onDelete, 
          onEnter, 
          correctWord,
          disabledLetters, 
          setDisabledLetters,
          gameOver,
          setGameOver
        }}>
        <Board />
        {gameOver.gameOver ? <GameOver /> : <Keyboard /> }
      </AppContext.Provider>
    </div>
  );
}

export default App;

