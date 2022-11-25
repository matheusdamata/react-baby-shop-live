import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  strong {
    font-size: 1.5rem;
  }

  strong:hover {
    color: ${(props) => props.theme['base-button']};
  }

  span {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-button']};
  }

  img {
    width: auto;
    height: 18.4375rem;

    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      transform: scale(1.05);
    }
  }
`
