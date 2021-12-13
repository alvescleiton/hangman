import styled from 'styled-components'

export const Container = styled.div`
  position: absolute;
  top: 30px;
  left: 214px;
`

export const Head = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #000;
`

export const Body = styled.div`
  position: absolute;
  top: 50px;
  left: 22px;
  background-color: #000;
  width: 6px;
  height: 70px;
`

export const LeftArm = styled.div`
  position: absolute;
  top: 58px;
  left: 12px;
  background-color: #000;
  width: 6px;
  height: 40px;
  transform: rotate(30deg);
`

export const RightArm = styled.div`
  position: absolute;
  top: 58px;
  left: 32px;
  background-color: #000;
  width: 6px;
  height: 40px;
  transform: rotate(-30deg);
`

export const LeftLeg = styled.div`
  position: absolute;
  top: 116px;
  left: 12px;
  background-color: #000;
  width: 6px;
  height: 40px;
  transform: rotate(30deg);
`

export const RightLeg = styled.div`
  position: absolute;
  top: 116px;
  left: 32px;
  background-color: #000;
  width: 6px;
  height: 40px;
  transform: rotate(-30deg);
`