import { NextPage } from "next"
import Background from "../components/Background"
import SplashHome from "../components/SplashHome"

const Home: NextPage = () => {
  return (
    <Background>
      <SplashHome />
    </Background>
  )
}

export default Home
