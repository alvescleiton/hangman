import { useContext } from "react"
import { AlphabetContext } from "../../hooks/AlphabetContext"
import { EndGameContext } from "../../hooks/EndGameContext"
import { WordContext } from "../../hooks/WordContext"
import { Container, Letter } from "./styles"

const Alphabet = () => {
  const { setLetter, listUsedLetters, rightLetters, wrongLetters } = useContext(AlphabetContext)
  const { word } = useContext(WordContext)
  const { endGame } = useContext(EndGameContext)

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

  const handleLetter = (letter: string) => {
    if (!endGame) {
      if (alphabet.includes(letter) && !listUsedLetters.includes(letter)) {
        setLetter(letter)
      }
    }
  }

  if (!word) return null

  return (
    <Container disabled={endGame}>
      {alphabet.map(letter => (
        <Letter
          key={letter}
          onClick={() => handleLetter(letter)}
          disabled={listUsedLetters.includes(letter)}
          correct={rightLetters.includes(letter)}
          wrong={wrongLetters.includes(letter)}
        >
          {letter}
        </Letter>
      ))}
    </Container>
  )
}

export default Alphabet