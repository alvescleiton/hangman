import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react'

type CreateContextType = {
  letter: string
  setLetter: Dispatch<SetStateAction<string>>
  listUsedLetters: string[]
}

type AlphabetContextType = {
  children: React.ReactNode
}

export const AlphabetContext = createContext<CreateContextType>({
  letter: '',
  setLetter: () => { },
  listUsedLetters: [],
})

export const AlphabetProvider = ({ children }: AlphabetContextType) => {
  const [letter, setLetter] = useState('')
  const [listUsedLetters, setListUsedLetters] = useState<string[]>([])

  useEffect(() => {
    if (letter.length > 0) {
      setListUsedLetters([...listUsedLetters, letter])
    }
  }, [letter])

  return (
    <AlphabetContext.Provider value={{ letter, setLetter, listUsedLetters }}>
      {children}
    </AlphabetContext.Provider>
  )
}