import styled, { css } from 'styled-components'

type ContainerProps = {
  endGame?: boolean
}

export const Container = styled.div<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  opacity: 0;
  transition: 0.6s all ease;

  ${props => props.endGame && css`
    pointer-events: auto;
    opacity: 1;
    background: rgba(255,255,255, 0.9);
    backdrop-filter: blur(5px);
  `}
`;

export const Title = styled.div`
  font-size: 34px;
  line-height: 34px;
  margin: 20px 0;
`

export const Subtitle = styled.div`
  font-size: 20px;
`

export const WinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${Title} {
    color: #00d01b;
  }
`

export const LoserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${Title} {
    color: #ff0000;
  }
`

export const ResetButton = styled.button`
  margin-top: 50px;
  background: #333;
  border: 2px solid #333;
  color: #FFF;
  font-size: 16px;
  padding: 8px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: .2s all ease;

  &:hover {
    background: #FFF;
    color: #333;
  }
`