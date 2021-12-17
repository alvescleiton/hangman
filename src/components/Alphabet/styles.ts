import styled, { css } from 'styled-components'

interface LeterProps {
  disabled?: boolean
  correct?: boolean
  wrong?: boolean
}

interface ContainerProps {
  disabled?: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;

  ${props => props.disabled && css`
    opacity: 0.5;
    pointer-events: none;
  `}
`

export const Letter = styled.button<LeterProps>`
  position: relative;
  width: 50px;
  height: 50px;
  border: 2px solid #444;
  color: #000;
  background: rgba(255,255,255, 0.6);
  border-radius: 6px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  margin: 5px;
  text-transform: uppercase;
  transition: .25s all ease;

  ${props => !props.disabled && css`
    &:hover {
      background: #000;
      color: #FFF;
    }
  `}

  ${props => props.disabled && css`
    opacity: 0.3;
    cursor: not-allowed;

    ${props.correct && css`
      background: #00d01b;
    `}

    ${props.wrong && css`
      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 10;
        width: 40px;
        height: 2px;
        transform: translate(-50%, -50%) rotate(45deg);
        background: #FF0000;
      }

      &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 10;
        width: 40px;
        height: 2px;
        transform: translate(-50%, -50%) rotate(-45deg);
        background: #FF0000;
      }
    `}
  `}
`