import React, { useContext } from 'react'
import { AppContext } from '../App'

const GameOver = () => {
    const { gameOver, setGameOver, correctWord, currentAttempt } = useContext(AppContext)
  return (
    <div>
        <h3>{gameOver.guessedWord ? "You guessed Correctly" : "You failed"}</h3>    

        <h1>Correct Word: {correctWord}</h1>

        {
            gameOver.guessedWord && ( 
                <h3>You guessed in {currentAttempt.attempt} attempts </h3>
            )
        }
    </div>
  )
}

export default GameOver