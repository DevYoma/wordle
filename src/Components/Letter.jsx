import React, { useContext, useEffect } from 'react'
import { AppContext } from '../App';
import '../Styles/Letter.css';

const Letter = ({ letterPosition, attemptValue,  }) => {
    // console.log(AppContext)
    const { board, correctWord, currentAttempt,disabledLetters, setDisabledLetters } = useContext(AppContext)
    // console.log(correctWord)
    // console.log(currentAttempt) => object...
    const letter = board[attemptValue][letterPosition]

    const correct = correctWord.toUpperCase()[letterPosition] === letter // this gives a boolean
    const almost = !correct && letter !== "" && correctWord.includes(letter)

    // take note of this tenary.. so beautiful... controls the coloring of the game
    const letterState =
     currentAttempt.attempt > attemptValue &&
     (correct ? "correct" : almost ? "almost" : "error")

     useEffect(() => {
      if(letter !== "" && !correct && !almost){
        // setDisabledLetters([
        //   ...disabledLetters,
        //   letter
        // ])
        setDisabledLetters(prevDisabledLetters => [
          ...prevDisabledLetters,
          letter
        ])
      }
     },[currentAttempt.attempt])
  return (
    <div id={letterState}>
      {" "}
      {letter}
    </div>
  )
}

export default Letter