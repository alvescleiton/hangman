import { Container, Letter } from "./styles"

const Alphabet = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

  return (
    <Container>
      {alphabet.map(letter => (
        <Letter key={letter}>{letter}</Letter>
      ))}
    </Container>
  )
}

export default Alphabet