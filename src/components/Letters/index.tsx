import { Container, Letter } from "./styles"

const Letters = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")

  return (
    <Container>
      {alphabet.map(letter => (
        <Letter key={letter}>{letter}</Letter>
      ))}
    </Container>
  )
}

export default Letters