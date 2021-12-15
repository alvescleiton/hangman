import { useContext, useEffect } from 'react'
import { AlphabetContext } from '../../hooks/AlphabetContext'
import { WordContext } from '../../hooks/WordContext'
import { Container, Item } from './styles'

const Word = () => {
  const { listUsedLetters } = useContext(AlphabetContext)
  const { word, resetWord } = useContext(WordContext)

  useEffect(() => {
    resetWord()
  }, [])

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