import { createContext, useState } from 'react'
import wordList from './../services/wordsList.json'

type CreateContextType = {
  word: string
  resetWord: () => void
}

type WordContextType = {
  children: React.ReactNode
}

export const WordContext = createContext<CreateContextType>({
  word: '',
  resetWord: () => { },
})

export const WordProvider = ({ children }: WordContextType) => {
  const [word, setWord] = useState('')

  const resetWord = () => {
    const index = Math.floor(Math.random() * wordList.length)

    setWord(wordList[index])
  }

  return (
    <WordContext.Provider value={{ word, resetWord }}>
      {children}
    </WordContext.Provider>
  )
}