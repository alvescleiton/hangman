import styled, { css } from 'styled-components'

type ItemProps = {
  space?: boolean
}

type ContainerProps = {
  winner?: boolean
}

export const Item = styled.div<ItemProps>`
  margin: 10px 6px;
  width: 30px;
  height: 40px;
  text-align: center;
  font-size: 30px;
  line-height: 40px;
  font-weight: 700;
  border-bottom: 1px solid #000;
  text-transform: uppercase;

  ${
    ({ space }) => space && `
      flex: 0 0 100%;
      width: 100%;
      height: 0;
      line-height: 0;
      margin: 0;
      border-bottom: 1px solid transparent;
    `
  }
`

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 30px;

  ${props => props.winner && css`
    ${Item} {
      color: green;
    }
  `}
`

export const Loading = styled.div`
  line-height: 60px;
`