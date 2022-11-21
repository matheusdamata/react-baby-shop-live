import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CategoryButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin: 2rem 0;

  gap: 2rem;
`

type CategoryButtonContentProps = {
  variant: 'girl' | 'boy'
}

export const CategoryButtonContent = styled.div<CategoryButtonContentProps>`
  width: 350px;
  height: 170px;

  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 1rem 1rem 1rem 0;

  border: 2px dashed ${(props) => props.theme['base-input']};
  box-shadow: 0 0 0 5px
    ${(props) =>
      props.variant === 'girl'
        ? props.theme['base-button']
        : props.theme['color-boy']};

  border-radius: 12px;

  color: ${(props) => props.theme.white};

  background: ${(props) =>
    props.variant === 'girl'
      ? props.theme['base-button']
      : props.theme['color-boy']};

  img {
    width: 350px;
    height: auto;

    border-radius: 12px;

    padding-right: 1rem;
    position: absolute;
  }
`

export const CategoryButtonInfo = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 8rem;

  z-index: 5;

  strong {
    font-size: 2rem;
  }
`

export const PopularProductsContainer = styled.section`
  width: 535px;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  margin: 4rem 0;

  h1 {
    font-size: 3rem;
  }

  p {
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
  }
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  margin-bottom: 2rem;
`

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.5rem;
  }

  span {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-button']};
  }

  img {
    width: auto;
    height: 280px;
  }
`
