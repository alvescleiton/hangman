import ContextList from "../components/ContextList"
import Background from "../components/Background"
import Gibbet from "../components/Gibbet"
import Category from "../components/Category"
import Alphabet from '../components/Alphabet'
import MainContainer from "../components/MainContainer"
import Word from "../components/Word"
import EndGame from "../components/EndGame"

const Game = () => {
  return (
    <ContextList>
      <Background>
        <EndGame />
        <MainContainer>
          <Category />
          <Gibbet />
          <Word />
          <Alphabet />
        </MainContainer>
      </Background>
    </ContextList>
  )
}

export default Game