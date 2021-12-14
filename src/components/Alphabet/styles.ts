import styled, { css } from 'styled-components'

interface LeterProps {
  disabled?: boolean
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;
`

export const Letter = styled.button<LeterProps>`
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
  `}
`