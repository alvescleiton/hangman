import { useContext, useEffect, useState } from 'react'
import { AlphabetContext } from '../../hooks/AlphabetContext'
import { Container, Item } from './styles'

import wordList from './wordsList.json'

const Word = () => {
  const { listUsedLetters } = useContext(AlphabetContext)
  const [word, setWord] = useState('')

  useEffect(() => {
    (async () => {
      const index = chooseWord()

      setWord(wordList[index])
    })()
  }, [])

  const chooseWord = () => {
    const randomNumber = Math.floor(Math.random() * wordList.length)

    return randomNumber
  }

  if (!word) {
    return <Container><p>Loading...</p></Container>
  }

  const wordArray = word.toLowerCase().split('')

  return (
    <Container>
      {wordArray.map((singleLetter, index) => (
        <Item key={`${singleLetter}-${index}`} space={singleLetter === ' '}>
          {listUsedLetters.includes(singleLetter) && singleLetter}
        </Item>
      ))}
    </Container>
  )
}

export default Word