import wordBank from './Word-Bank.txt'

export const boardDefault = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""]
];

export const generateWordSet = async () => {
    // const newSet = new Set()
    let wordSet;

    // randomizing the word for the day
    let todaysWord;

    await fetch(wordBank)
    .then(res => res.text())
    .then(result => {
        const wordArray = result.split("\n")

        // Todays word => randomizing it 
        todaysWord = wordArray[Math.floor(Math.random() * wordArray.length)]
        console.log(todaysWord)
        wordSet = new Set(wordArray)
    })

    return { wordSet, todaysWord }
}