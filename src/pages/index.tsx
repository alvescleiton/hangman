import { NextPage } from "next"
import Background from "../components/Background"
import Gibbet from "../components/Gibbet"
import Alphabet from '../components/Alphabet'
import MainContainer from "../components/MainContainer"
import Word from "../components/Word"
import { AlphabetProvider } from "../hooks/AlphabetContext"

const Home: NextPage = () => {
  return (
    <AlphabetProvider>
      <Background>
        <MainContainer>
          <Gibbet />
          <Word />
          <Alphabet />
        </MainContainer>
      </Background>
    </AlphabetProvider>
  )
}

export default Home
