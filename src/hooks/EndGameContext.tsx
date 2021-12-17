import { createContext, useContext, useEffect, useState } from 'react'
import { AlphabetContext } from './AlphabetContext'
import { WordContext } from './WordContext'

type CreateContextType = {
  endGame: boolean
  winner: boolean
  loser: boolean
  resetGame: () => void
}

type EndGameProviderType = {
  children: React.ReactNode
}

export const EndGameContext = createContext<CreateContextType>({
  endGame: false,
  winner: false,
  loser: false,
  resetGame: () => { },
})

export const EndGameProvider = ({ children }: EndGameProviderType) => {
  const [endGame, setEndGame] = useState(false)
  const [winner, setWinner] = useState(false)
  const [loser, setLoser] = useState(false)
  const { listUsedLetters, setListUsedLetters } = useContext(AlphabetContext)
  const { word, resetWord } = useContext(WordContext)

  const resetGame = () => {
    setEndGame(false)
    setWinner(false)
    setLoser(false)
    resetWord()
    setListUsedLetters([])
  }

  useEffect(() => {
    if (listUsedLetters.length > 0) {
      const wordArray = word.split('')

      var win = wordArray.every(letter => {
        return listUsedLetters.includes(letter)
      })

      if (win) {
        setEndGame(true)
        setWinner(true)
      }
    }
  }, [listUsedLetters])

  return (
    <EndGameContext.Provider value={{ endGame, winner, loser, resetGame }}>
      {children}
    </EndGameContext.Provider>
  )
}