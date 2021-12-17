import { NextPage } from "next"
import ContextList from "../components/ContextList"
import Background from "../components/Background"
import Gibbet from "../components/Gibbet"
import Alphabet from '../components/Alphabet'
import MainContainer from "../components/MainContainer"
import Word from "../components/Word"

const Home: NextPage = () => {
  return (
    <ContextList>
      <Background>
        <MainContainer>
          <Gibbet />
          <Word />
          <Alphabet />
        </MainContainer>
      </Background>
    </ContextList>
  )
}

export default Home
