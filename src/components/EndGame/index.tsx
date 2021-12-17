import { useContext } from "react"
import { EndGameContext } from "../../hooks/EndGameContext"
import { WordContext } from "../../hooks/WordContext"
import { Container, WinnerContainer, Title, Subtitle, LoserContainer, ResetButton } from "./styles"

const EndGame = () => {
  const { endGame, winner, loser, resetGame } = useContext(EndGameContext)
  const { word } = useContext(WordContext)

  return (
    <Container endGame={endGame}>
      {winner && (
        <WinnerContainer>
          <Title>You win!!! =)</Title>
          <Subtitle>The word is <strong>{word ? word : '...'}</strong></Subtitle>
        </WinnerContainer>
      )}

      {loser && (
        <LoserContainer>
          <Title>You lose! =(</Title>
          <Subtitle>The word is <strong>{word ? word : '...'}</strong></Subtitle>
        </LoserContainer>
      )}

      <ResetButton onClick={resetGame}>Restart Game</ResetButton>
    </Container>
  )
}

export default EndGame