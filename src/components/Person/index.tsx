import { useContext } from "react"
import { AlphabetContext } from "../../hooks/AlphabetContext"
import { Container, Body, Head, LeftArm, LeftLeg, RightArm, RightLeg, Eyes } from "./styles"

const Person = () => {
  const { wrongLetters } = useContext(AlphabetContext)

  const showComponentRules = {
    Head: wrongLetters.length >= 1,
    Body: wrongLetters.length >= 2,
    LeftArm: wrongLetters.length >= 3,
    RightArm: wrongLetters.length >= 4,
    LeftLeg: wrongLetters.length >= 5,
    RightLeg: wrongLetters.length >= 6,
    Eyes: wrongLetters.length >= 7,
  }

  return (
    <Container>
      <Head show={showComponentRules.Head} />
      <Body show={showComponentRules.Body} />
      <LeftArm show={showComponentRules.LeftArm} />
      <RightArm show={showComponentRules.RightArm} />
      <LeftLeg show={showComponentRules.LeftLeg} />
      <RightLeg show={showComponentRules.RightLeg} />
      <Eyes show={showComponentRules.Eyes} />
    </Container>
  )
}

export default Person