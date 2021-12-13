import { NextPage } from "next"
import Background from "../components/Background"
import Gibbet from "../components/Gibbet"
import MainContainer from "../components/MainContainer"

const Home: NextPage = () => {
  return (
    <Background>
      <MainContainer>
        <Gibbet />
      </MainContainer>
    </Background>
  )
}

export default Home
