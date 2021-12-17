import { createContext, useState } from 'react'
import wordList from './../services/wordsList.json'

type CreateContextType = {
  word: string
  setWord: (word: string) => void
  randomWord: () => void
}

type WordContextType = {
  children: React.ReactNode
}

export const WordContext = createContext<CreateContextType>({
  word: '',
  setWord: () => { },
  randomWord: () => { },
})

export const WordProvider = ({ children }: WordContextType) => {
  const [word, setWord] = useState('')

  const randomWord = () => {
    setTimeout(() => {
      const index = Math.floor(Math.random() * wordList.length)

      setWord(wordList[index])
    }, 2000)
  }

  return (
    <WordContext.Provider value={{ word, setWord, randomWord }}>
      {children}
    </WordContext.Provider>
  )
}