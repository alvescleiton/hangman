import { createContext, useContext, useEffect, useState } from 'react'
import { AlphabetContext } from './AlphabetContext'
import { WordContext } from './WordContext'

type CreateContextType = {
  endGame: boolean
  winner: boolean
  loser: boolean
  resetGame: () => void
}

type EndGameProviderProps = {
  children: React.ReactNode
}

export const EndGameContext = createContext<CreateContextType>({
  endGame: false,
  winner: false,
  loser: false,
  resetGame: () => { },
})

export const EndGameProvider = ({ children }: EndGameProviderProps) => {
  const [endGame, setEndGame] = useState(false)
  const [winner, setWinner] = useState(false)
  const [loser, setLoser] = useState(false)
  const { letter, setLetter, rightLetters, setRightLetters, wrongLetters, setWrongLetters, setListUsedLetters } = useContext(AlphabetContext)
  const { word, setWord, randomWord } = useContext(WordContext)

  useEffect(() => {
    if (letter.length) {
      const wordArray = word.split('')

      if (wordArray.includes(letter)) {
        setRightLetters([...rightLetters, letter])
      } else {
        setWrongLetters([...wrongLetters, letter])
      }
    }
  }, [letter])

  useEffect(() => {
    checkWinner()
  }, [rightLetters])

  useEffect(() => {
    checkLoser()
  }, [wrongLetters])

  const resetGame = () => {
    setEndGame(false)
    setWinner(false)
    setLoser(false)
    setListUsedLetters([])
    setRightLetters([])
    setWrongLetters([])
    setLetter('')
    setWord('')

    randomWord()
  }

  const checkWinner = () => {
    const wordArray = word.split('')

    var win = rightLetters.length > 0 && wordArray.every(letter => {
      return rightLetters.includes(letter)
    })

    if (win) {
      setEndGame(true)
      setWinner(true)
    }
  }

  const checkLoser = () => {
    const lose = wrongLetters.length >= 6 && wrongLetters.length > 0
    if (lose) {
      setEndGame(true)
      setLoser(true)
    }
  }

  return (
    <EndGameContext.Provider value={{ endGame, winner, loser, resetGame }}>
      {children}
    </EndGameContext.Provider>
  )
}