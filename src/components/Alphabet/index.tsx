import { useContext } from "react"
import { AlphabetContext } from "../../hooks/AlphabetContext"
import { Container, Letter } from "./styles"

const Alphabet = () => {
  const { setLetter, listUsedLetters } = useContext(AlphabetContext)

  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

  const handleLetter = (letter: string) => {
    if (alphabet.includes(letter) && !listUsedLetters.includes(letter)) {
      setLetter(letter)
    }
  }

  return (
    <Container>
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