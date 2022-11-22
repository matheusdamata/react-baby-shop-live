import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme['base-input-contrast']};
  color: ${(props) => props.theme.white};
`

export const Content = styled.div`
  width: 70rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 2rem 0;
  gap: 2rem;

  h1 {
    font-size: 1.875rem;
    margin-right: 4rem;
  }

  input {
    display: flex;
    flex: 1;

    height: 60px;

    border-radius: 12px;
    border: 1px solid ${(props) => props.theme['base-input-border']};

    background: ${(props) => props.theme['color-header-top-bar']};

    padding: 0 2rem;

    font-family: 'Open Sans', sans-serif;

    &::placeholder {
      color: ${(props) => props.theme.white};
    }
  }

  button {
    width: auto;
    height: 60px;

    display: flex;
    align-items: center;

    padding: 0 2rem;

    border: 0;
    border-radius: 12px;

    background: ${(props) => props.theme['base-button']};

    font-size: 1.125rem;
    color: ${(props) => props.theme.white};

    & svg {
      margin-left: 0.5rem;
    }
  }
`
