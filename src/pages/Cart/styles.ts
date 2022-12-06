import styled from 'styled-components'

export const Container = styled.main`
  width: 70rem;

  display: flex;
  flex-direction: column;

  hr {
    height: 1px;

    border: 0;
    background: ${(props) => props.theme['base-border-amount']};
    opacity: 0.5;
  }
`

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 18.75rem;

  overflow-y: auto;

  margin: 2rem 0 3rem;
  gap: 2rem;
`

export const EmptyCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 240px;

  strong {
    font-size: 1.625rem;
  }
`

export const CartContainer = styled.div`
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

export const CartView = styled.a`
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

export const FooterCart = styled.footer`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.875rem;
  }
`

export const CupomCartContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  margin: 2rem 0;

  input {
    height: 48px;

    border: 0;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;

    padding: 0 1rem;

    background: ${(props) => props.theme['base-input']};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    background: ${(props) => props.theme['base-button']};
    padding: 0 1rem;

    border: 0;

    color: ${(props) => props.theme.white};

    &:hover {
      transition: background-color 0.2s ease;
      background: ${(props) => props.theme['icon-instagram']};
    }
  }
`

export const PriceCartContent = styled.table`
  display: flex;
  flex-direction: column;

  tbody {
    font-family: 'Open Sans', sans-serif;
    font-size: 0.9375rem;
  }

  th {
    width: 20%;

    text-align: left;
  }
`

export const TrBase = styled.tr`
  display: flex;
  flex-direction: row;

  padding: 1rem 0;

  border-bottom: 1px solid ${(props) => props.theme['base-border-amount']};
`

export const ButtonStartCheckout = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 20%;

  border-radius: 8px;

  background: ${(props) => props.theme['base-button']};

  margin-top: 2rem;
  padding: 1rem;

  border: 0;

  color: ${(props) => props.theme.white};

  &:hover {
    transition: background-color 0.2s ease;
    background: ${(props) => props.theme['icon-instagram']};
  }
`
