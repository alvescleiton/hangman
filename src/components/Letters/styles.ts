import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;
`

export const Letter = styled.button`
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

  &:hover {
    background: #000;
    color: #FFF;
  }
`