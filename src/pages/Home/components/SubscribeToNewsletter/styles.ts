import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: row;

  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2rem;
  padding: 2rem 0;

  color: ${(props) => props.theme.white};
`

export const SideLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 470px;

  padding: 1.8rem;
  gap: 1rem;

  border-radius: 8px;

  background: ${(props) => props.theme['base-input-contrast']};

  h1 {
    font-size: 2.5rem;
  }

  button {
    width: 90%;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 0 0 2rem;

    border: 0;
    border-radius: 8px;

    background: ${(props) => props.theme['base-button']};

    font-size: 1.125rem;
    color: ${(props) => props.theme.white};
  }

  span {
    height: 100%;
    width: 45px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;

    background: ${(props) => props.theme['newsletter-button-contrast']};
  }

  @media (min-width: 425px) and (max-width: 768px) {
    gap: 1rem;

    h1 {
      font-size: 1.25rem;
      margin: 0;
    }

    button {
      font-size: 1rem;
    }
  }
`

export const InputNewSletter = styled.input`
  display: flex;
  flex: 1;

  width: 100%;

  border-radius: 8px;
  border: 1px solid ${(props) => props.theme['base-input-border']};

  background: ${(props) => props.theme['color-header-top-bar']};

  padding: 1.25rem;

  font-family: 'Open Sans', sans-serif;
  color: ${(props) => props.theme.white};

  & + & {
    margin-bottom: 1rem;
  }

  &::placeholder {
    color: ${(props) => props.theme.white};
  }
`

export const SideRight = styled.div`
  display: flex;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
  }
`
