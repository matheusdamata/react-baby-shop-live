import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: center;

  overflow: hidden;

  color: ${(props) => props.theme.white};

  & > img {
    max-height: 500px;
    height: auto;

    flex: 1;

    object-fit: cover;
    object-position: 20% 25%;
  }
`

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding: 1.875rem 3rem;

  background: ${(props) => props.theme['base-text']};

  img {
    width: auto;
    height: 146px;

    object-fit: contain;
  }
`

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  h1 {
    font-size: 3.125rem;
  }

  & > span {
    color: ${(props) => props.theme['base-button']};
  }

  p {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.1875rem;
    line-height: 1.6;

    margin-top: 0.75rem;
  }
`

export const ButtonLearnMore = styled.button`
  width: 70%;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 0 0 2rem;
  margin-top: 2rem;

  border: 0;
  border-radius: 8px;

  background: ${(props) => props.theme['base-button']};

  font-size: 1.125rem;
  color: ${(props) => props.theme.white};

  & > span {
    height: 100%;
    width: 45px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;

    background: ${(props) => props.theme['newsletter-button-contrast']};
  }
`
