import styled from 'styled-components'

export const Container = styled.main`
  width: 70rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CategoryButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin: 2rem 0;

  gap: 2rem;

  @media (min-width: 425px) and (max-width: 768px) {
    flex-direction: column;
  }
`

type CategoryButtonContentProps = {
  variant: 'girl' | 'boy'
}

export const CategoryBorderButton = styled.div<CategoryButtonContentProps>`
  border: 2px dashed ${(props) => props.theme['base-input']};
  box-shadow: 0 0 0 5px
    ${(props) =>
      props.variant === 'girl'
        ? props.theme['base-button']
        : props.theme['color-boy']};
  border-radius: 12px;

  background: ${(props) =>
    props.variant === 'girl'
      ? props.theme['base-button']
      : props.theme['color-boy']};

  position: relative;
  overflow: hidden;
`

export const CategoryButtonContent = styled.div`
  width: 350px;
  height: 170px;

  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 1rem 1rem 1rem 0;

  color: ${(props) => props.theme.white};

  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.025);
  }

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

  @media (min-width: 425px) and (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  margin-bottom: 2rem;

  cursor: pointer;

  @media (min-width: 425px) and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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
    height: 250px;

    transition: all 0.2s;

    &:hover {
      transform: scale(1.05);
    }
  }
`

export const InstagramContainer = styled.section`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(6, 1fr);

  flex-direction: row;
  align-items: center;
  justify-content: center;
`
