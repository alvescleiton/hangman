import { Container } from './styles'

type BackgroundProps = {
  children: React.ReactNode
}

const Background = ({ children }: BackgroundProps) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default Background