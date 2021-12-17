import { useContext, useEffect } from 'react'
import { AlphabetContext } from '../../hooks/AlphabetContext'
import { EndGameContext } from '../../hooks/EndGameContext'
import { WordContext } from '../../hooks/WordContext'
import { Container, Item, Loading } from './styles'

const Word = () => {
  const { listUsedLetters } = useContext(AlphabetContext)
  const { word, randomWord } = useContext(WordContext)
  const { winner } = useContext(EndGameContext)

  useEffect(() => {
    randomWord()
  }, [])

  if (!word) {
    return <Container><Loading>Loading...</Loading></Container>
  }

  const wordArray = word.toLowerCase().split('')

  return (
    <Container winner={winner}>
      {wordArray.map((singleLetter, index) => (
        <Item key={`${singleLetter}-${index}`} space={singleLetter === ' '}>
          {listUsedLetters.includes(singleLetter) && singleLetter}
        </Item>
      ))}
    </Container>
  )
}

export default Word