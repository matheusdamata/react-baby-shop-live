import styled from 'styled-components'

export const Container = styled.main`
  width: 70rem;

  display: flex;
  flex-direction: column;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;
  gap: 2rem;
`

export const WishContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  font-family: 'Open Sans', sans-serif;
  color: ${(props) => props.theme['base-text-footer']};

  img {
    width: 6rem;
    height: 6rem;

    margin: 0 1rem;
  }

  svg {
    cursor: pointer;
  }
`

export const ButtonRemove = styled.button`
  width: 20px;
  height: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  border: 0;
`

export const WishView = styled.a`
  font-weight: 400;
  text-decoration: none;
  color: ${(props) => props.theme['base-text-footer']};

  margin-left: 1rem;

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme['base-button']};
  }
`

type SpanTextProps = {
  variant: 'instock' | 'ofstock'
}

export const SpanText = styled.span<SpanTextProps>`
  color: ${(props) =>
    props.variant === 'instock'
      ? props.theme['base-button']
      : props.theme['red-off']};
`

export const ButtonAmountProduct = styled.button`
  border: 0;
  border-radius: 12px;

  font-size: 1.25rem;
  color: ${(props) => props.theme.white};

  padding: 0.5rem 1.25rem;
  background: ${(props) => props.theme['base-button']};

  &:not(:disabled):hover {
    transition: background-color 0.2s ease;
    background: ${(props) => props.theme['icon-instagram']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
