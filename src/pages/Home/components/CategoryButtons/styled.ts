import styled from 'styled-components'

const BACKGROUND_COLORS = {
  limon: 'category-color-limon-100',
  blue: 'category-color-blue-100',
  pink: 'category-color-pink-100',
} as const

const BORDER_COLORS = {
  limon: 'category-color-limon-300',
  blue: 'category-color-blue-300',
  pink: 'category-color-pink-300',
} as const

type ColorProps = {
  backgroundColor: keyof typeof BACKGROUND_COLORS
  borderColor: keyof typeof BORDER_COLORS
}

export const Container = styled.div<ColorProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 160px;
  height: auto;

  border: 2px dashed ${(props) => props.theme[BORDER_COLORS[props.borderColor]]};

  padding: 1.75rem 0 1.375rem;

  cursor: pointer;

  background: ${(props) =>
    props.theme[BACKGROUND_COLORS[props.backgroundColor]]};

  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: auto;
    height: 97px;

    object-fit: contain;
  }

  h6 {
    margin-top: 0.5rem;
    font-size: 1.3125rem;
  }
`
