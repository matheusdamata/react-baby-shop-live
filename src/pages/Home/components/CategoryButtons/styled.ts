import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 160px;
  height: auto;

  border: 2px dashed ${(props) => props.theme['category-color-blue-300']};

  padding: 1.75rem 0 1.375rem;

  cursor: pointer;

  background: ${(props) => props.theme['category-color-blue-100']};

  img {
    width: auto;
    height: 97px;
  }

  h6 {
    margin-top: 0.5rem;
    font-size: 1.3125rem;
  }
`
