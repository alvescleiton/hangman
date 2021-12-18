import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 420px;
  margin: 0 auto;
  padding: 20px;

  @media screen and (max-width: 767px) {
    padding: 10px;
  }
`