import styled, { css } from 'styled-components'

export const Container = styled.footer`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  margin: 4rem 0 0 0;
`

export const FooterMenuContainer = styled.div`
  max-width: 70rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0 2rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;

  img {
    width: 75px;
    height: auto;

    margin-bottom: 2rem;
  }

  strong {
    font-size: 1.5rem;

    margin-bottom: 1rem;
  }

  p {
    padding-right: 2rem;
  }

  a,
  p {
    font-family: 'Open Sans', sans-serif;
    text-decoration: none;
    color: ${(props) => props.theme['base-text-footer']};

    margin-bottom: 0.5rem;
  }

  a:hover {
    color: ${(props) => props.theme['base-button']};
  }

  @media (min-width: 425px) and (max-width: 768px) {
    strong {
      font-size: 1.25rem;
    }

    p,
    a {
      font-size: 0.75rem;
    }
  }
`

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 1rem;
  gap: 0.5rem;
`

type IconContentProps = {
  variant: 'instagram' | 'twitter' | 'facebook'
}

export const IconContent = styled.span<IconContentProps>`
  width: 32px;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  cursor: pointer;

  ${(props) => {
    switch (props.variant) {
      case 'instagram':
        return css`
          background-color: ${(props) => props.theme['icon-instagram']};
        `
      case 'twitter':
        return css`
          background-color: ${(props) => props.theme['icon-twitter']};
        `
      case 'facebook':
        return css`
          background-color: ${(props) => props.theme['icon-facebook']};
        `
    }
  }}

  svg {
    color: ${(props) => props.theme.white};
  }
`

export const FooterDescriptionAndCards = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Open Sans', sans-serif;
  color: ${(props) => props.theme['base-text-footer']};

  padding: 1rem 0;
  margin-top: 3rem;

  background: ${(props) => props.theme['base-input']};

  a {
    text-decoration: none;
    color: ${(props) => props.theme['base-text']};

    &:hover {
      color: ${(props) => props.theme['base-button']};
    }
  }

  @media (min-width: 425px) and (max-width: 768px) {
    span {
      font-size: 0.75rem;
    }
  }
`

export const FooterDescriptionAndCardsContent = styled.div`
  width: 70rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2rem;
`
