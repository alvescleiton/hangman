import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  0% {
    color: #333;
  }

  25% {
    color: #f02d03;
  }

  50% {
    color: #3a3aae;
  }

  75% {
    color: #458c38;
  }

  100% {
    color: #333;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`

export const Title = styled.div`
  position: relative;
  font-size: 42px;
  font-weight: 700;
  margin: 40px 0;
  cursor: default;
  user-select: none;
  animation: ${pulse} 4s linear infinite;
`

export const PlayButton = styled.button`
  position: relative;
  z-index: 2;
  border: 2px solid #333;
  background: transparent;
  border-radius: 4px;
  padding: 10px;
  font-size: 20px;
  width: 150px;
  cursor: pointer;
  transition: .25s all ease;

  &:hover {
    background: #333;
    color: #fff;
  }
`