import styled from 'styled-components'
import * as Tabs from '@radix-ui/react-tabs'

export const Container = styled.div`
  width: 70rem;

  display: flex;
  align-items: center;
  flex-direction: column;
`

export const ProductContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
`

export const LeftSide = styled.div`
  flex: 1;

  img {
    width: 30rem;
    height: auto;
  }
`

export const RightSide = styled.div`
  flex: 1;

  h1 {
    font-size: 2.5rem;
  }

  strong {
    font-size: 1.625rem;
    letter-spacing: -1px;
    color: ${(props) => props.theme['base-button']};
  }

  p {
    font-family: 'Open Sans', sans-serif;
    color: ${(props) => props.theme['base-text-footer']};
    line-height: 26px;

    margin-top: 1rem;
  }
`

export const AmountProductContent = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 1rem;
`

export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-right: 1rem;
  padding: 0 1rem;
  gap: 2rem;

  border: 1px solid ${(props) => props.theme['base-border-amount']};
  border-radius: 12px;

  background: ${(props) => props.theme['base-input']};

  span {
    font-family: 'Open sans', sans-serif;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-text-amount']};
  }
`

export const QuantityContent = styled.div`
  display: flex;
  align-items: center;

  font-family: 'Open sans', sans-serif;
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text-amount']};

  gap: 0.5rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    background: transparent;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }

  svg {
    color: ${(props) => props.theme['base-text-amount']};

    &:hover {
      transition: color 0.2s;
      color: ${(props) => props.theme['base-button']};
    }
  }
`

export const ButtonAmountProduct = styled.button`
  border: 0;
  border-radius: 12px;

  font-size: 1.25rem;
  color: ${(props) => props.theme.white};

  padding: 0.5rem 1.25rem;
  background: ${(props) => props.theme['base-button']};

  &:hover {
    transition: background-color 0.2s ease;
    background: ${(props) => props.theme['icon-instagram']};
  }
`

export const WishListContent = styled.div`
  margin-top: 2rem;
`

export const ButtonWishList = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;

  color: ${(props) => props.theme['base-button']};
  background: transparent;

  gap: 0.5rem;

  &:hover {
    transition: opacity 0.2s;
    opacity: 0.7;
  }
`

export const TabsProductContainer = styled.div`
  width: 100%;
  display: flex;

  margin-top: 2rem;
`

export const TabsRoot = styled(Tabs.Root)`
  outline: 1px solid ${(props) => props.theme['tabs-root-border']};
  background: ${(props) => props.theme['tabs-root']};
`

export const TabsTrigger = styled(Tabs.Trigger)`
  padding: 1rem 2rem;
  border: 0;
  background: transparent;

  &:hover {
    color: ${(props) => props.theme['base-button']};
  }
`

export const TabsContent = styled(Tabs.Content)`
  padding: 2rem;
`
