import styled, { css } from 'styled-components'

type Props = {
  show?: boolean
}

export const Container = styled.div`
  position: absolute;
  top: 30px;
  left: calc(50% + 37px);
  width: 50px;
`

export const Head = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #000;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  ${props => props.show && css`
    opacity: 1;
  `}
`

export const Body = styled.div<Props>`
  position: absolute;
  top: 50px;
  left: 22px;
  background-color: #000;
  width: 6px;
  height: 70px;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  ${props => props.show && css`
    opacity: 1;
  `}
`

export const LeftArm = styled.div<Props>`
  position: absolute;
  top: 58px;
  left: 12px;
  background-color: #000;
  width: 6px;
  height: 40px;
  transform: rotate(30deg);
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  ${props => props.show && css`
    opacity: 1;
  `}
`

export const RightArm = styled.div<Props>`
  position: absolute;
  top: 58px;
  left: 32px;
  background-color: #000;
  width: 6px;
  height: 40px;
  transform: rotate(-30deg);
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  ${props => props.show && css`
    opacity: 1;
  `}
`

export const LeftLeg = styled.div<Props>`
  position: absolute;
  top: 116px;
  left: 12px;
  background-color: #000;
  width: 6px;
  height: 40px;
  transform: rotate(30deg);
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  ${props => props.show && css`
    opacity: 1;
  `}
`

export const RightLeg = styled.div<Props>`
  position: absolute;
  top: 116px;
  left: 32px;
  background-color: #000;
  width: 6px;
  height: 40px;
  transform: rotate(-30deg);
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  ${props => props.show && css`
    opacity: 1;
  `}
`

export const Eyes = styled.div<Props>`
  position: absolute;
  display: flex;
  justify-content: space-evenly;
  width: 90%;
  height: 15px;
  top: 9px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.2s ease-in-out;

  ${props => props.show && css`
    opacity: 1;
  `}

  &:before {
    content: 'x';
    display: block;
    color: #FFF;
    font-size: 24px;
  }

  &:after {
    content: 'x';
    display: block;
    color: #FFF;
    font-size: 24px;
  }
`;