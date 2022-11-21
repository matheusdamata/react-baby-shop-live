import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  overflow: hidden;

  img {
    width: 100%;
    max-height: 600px;
    height: auto;

    object-fit: cover;
    object-position: 20% 25%;
  }
`
