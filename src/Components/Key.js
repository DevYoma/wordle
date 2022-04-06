import React, { useContext } from 'react'
import '../Styles/Key.css'
import { AppContext } from '../App'

// the disabled is a boolean to know if the key should be disabled or not
const Key = ({ keyVal, disabled }) => {
    const { onDelete, onEnter, onSelectLetter } = useContext(AppContext)
    // console.log(board)
  const selectLetter = () => {
    //   MAKING A CONDITION BASED ON WHETHER OR NOT THE ENTER KEY IS PRESSED
    if(keyVal === "Enter"){
        onEnter()
    }

    // DELETE FUNCTION => omo i know that i dont get this function, but it is working...
    else if(keyVal === 'Delete'){
        onDelete()
    }

    else{
       onSelectLetter(keyVal)
    }
    // end of else statement
  }  

  return (
    <div 
        onClick={selectLetter}
        className='key'
        id={disabled ? "disabled" : null}
    >
        {keyVal}
    </div>
  )
}

export default Key


// this component takes in the value of the key through props 

// Enter
 // checking if the attempt letter positions !== 5
        // if(currentAttempt.letterPosition !== 5) return;
        // else{
        //     setCurrentAttempt(prevCurrentAttempt => {
        //         return {
        //             // ...prevCurrentAttempt,
        //             attempt:  prevCurrentAttempt.attempt + 1,
        //             letterPosition: 0
        //         }
        //     })
        // }

// DELETE
 // if(currentAttempt.letterPosition === 0) return;

        // const currentBoard = [...board];
        // currentBoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = "" //this line removes the letter onClick of the Delete button...
        // setBoard(currentBoard)
        // setCurrentAttempt(prevCurrentAttempt => {
        //     return {
        //         ...prevCurrentAttempt,
        //         letterPosition: prevCurrentAttempt.letterPosition - 1
        //     }
        // })

// SELECTLETTER        
     // checking if the attempt letter position is less than 4
    //   if(currentAttempt.letterPosition > 4) return;
    //   const currentBoard = [...board]
    //   currentBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyVal // i don't get this line... i think i get it a bit
    //   setBoard(currentBoard)
  
    //   setCurrentAttempt(prevCurrentAttempt => {
    //       return {
    //           ...prevCurrentAttempt,
    //           letterPosition: prevCurrentAttempt.letterPosition + 1
    //       }
    //   })