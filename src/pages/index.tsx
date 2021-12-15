import { NextPage } from "next"
import Background from "../components/Background"
import Gibbet from "../components/Gibbet"
import Alphabet from '../components/Alphabet'
import MainContainer from "../components/MainContainer"
import Word from "../components/Word"
import { AlphabetProvider } from "../hooks/AlphabetContext"
import { WordProvider } from "../hooks/WordContext"

const Home: NextPage = () => {
  return (
    <WordProvider>
      <AlphabetProvider>
        <Background>
          <MainContainer>
            <Gibbet />
            <Word />
            <Alphabet />
          </MainContainer>
        </Background>
      </AlphabetProvider>
    </WordProvider>
  )
}

export default Home
