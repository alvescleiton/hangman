import { useContext } from "react"
import { EndGameContext } from "../../hooks/EndGameContext"
import { Container } from "./styles"

const EndGame = () => {
  const { endGame, winner, loser, resetGame } = useContext(EndGameContext)

  return (
    <Container endGame={endGame}>
      {winner || loser ? (
        <>
          You {winner ? 'win!!! =)' : 'lose! =('}
          <br />
          <button onClick={resetGame}>Reset</button>
        </>
      ) : null}
    </Container>
  )
}

export default EndGame