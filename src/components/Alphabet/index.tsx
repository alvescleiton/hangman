import { useContext } from "react"
import { AlphabetContext } from "../../hooks/AlphabetContext"
import { EndGameContext } from "../../hooks/EndGameContext"
import { Container, Letter } from "./styles"

const Alphabet = () => {
  const { setLetter, listUsedLetters } = useContext(AlphabetContext)
  const { endGame } = useContext(EndGameContext)

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

  const handleLetter = (letter: string) => {
    if (!endGame) {
      if (alphabet.includes(letter) && !listUsedLetters.includes(letter)) {
        setLetter(letter)
      }
    }
  }

  return (
    <Container disabled={endGame}>
      {alphabet.map(letter => (
        <Letter
          key={letter}
          onClick={() => handleLetter(letter)}
          disabled={listUsedLetters.includes(letter)}
        >
          {letter}
        </Letter>
      ))}
    </Container>
  )
}

export default Alphabet