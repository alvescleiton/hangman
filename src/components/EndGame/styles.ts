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