import { NextPage } from "next"
import Background from "../components/Background"
import Gibbet from "../components/Gibbet"
import Letters from '../components/Letters'
import MainContainer from "../components/MainContainer"

const Home: NextPage = () => {
  return (
    <Background>
      <MainContainer>
        <Gibbet />
        <Letters />
      </MainContainer>
    </Background>
  )
}

export default Home
