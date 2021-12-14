import { useContext } from 'react'
import { AlphabetContext } from '../../hooks/AlphabetContext'
import { Container, Item } from './styles'

const Word = () => {
  const { listUsedLetters } = useContext(AlphabetContext)
  const word = 'Cleiton Sousa'

  if (!word) return null

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