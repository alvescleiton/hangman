import Link from 'next/link'
import { Container, PlayButton, Title } from "./styles"

const SplashHome = () => {
  return (
    <Container>
      <Title>Hangman</Title>
      <Link href="/game">
        <a>
          <PlayButton>Play</PlayButton>
        </a>
      </Link>
    </Container>
  )
}

export default SplashHome