import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const Head = styled.div`
  position: absolute;
  top: 30px;
  left: 190px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #000;
`

export const Body = styled.div`
  position: absolute;
  top: 80px;
  left: 212px;
  background-color: #000;
  width: 6px;
  height: 70px;
`

export const LeftArm = styled.div`
  position: absolute;
  top: 88px;
  left: 202px;
  background-color: #000;
  width: 6px;
  height: 40px;
  transform: rotate(30deg);
`

export const RightArm = styled.div`
  position: absolute;
  top: 88px;
  left: 222px;
  background-color: #000;
  width: 6px;
  height: 40px;
  transform: rotate(-30deg);
`

export const LeftLeg = styled.div`
  position: absolute;
  top: 146px;
  left: 202px;
  background-color: #000;
  width: 6px;
  height: 40px;
  transform: rotate(30deg);
`

export const RightLeg = styled.div`
  position: absolute;
  top: 146px;
  left: 222px;
  background-color: #000;
  width: 6px;
  height: 40px;
  transform: rotate(-30deg);
`