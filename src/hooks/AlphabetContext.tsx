import { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react'

type CreateContextType = {
  letter: string
  setLetter: Dispatch<SetStateAction<string>>
  listUsedLetters: string[]
  setListUsedLetters: Dispatch<SetStateAction<string[]>>
  rightLetters: string[]
  setRightLetters: Dispatch<SetStateAction<string[]>>
  wrongLetters: string[]
  setWrongLetters: Dispatch<SetStateAction<string[]>>
}

type AlphabetProviderType = {
  children: React.ReactNode
}

export const AlphabetContext = createContext<CreateContextType>({
  letter: '',
  setLetter: () => { },
  listUsedLetters: [],
  setListUsedLetters: () => { },
  rightLetters: [],
  setRightLetters: () => { },
  wrongLetters: [],
  setWrongLetters: () => { },
})

export const AlphabetProvider = ({ children }: AlphabetProviderType) => {
  const [letter, setLetter] = useState('')
  const [listUsedLetters, setListUsedLetters] = useState<string[]>([])
  const [rightLetters, setRightLetters] = useState<string[]>([])
  const [wrongLetters, setWrongLetters] = useState<string[]>([])

  useEffect(() => {
    if (letter.length > 0) {
      setListUsedLetters([...listUsedLetters, letter])
    }
  }, [letter])

  return (
    <AlphabetContext.Provider value={{ letter, setLetter, listUsedLetters, setListUsedLetters, rightLetters, setRightLetters, wrongLetters, setWrongLetters }}>
      {children}
    </AlphabetContext.Provider>
  )
}