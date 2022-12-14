import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.header`
  display: flex;
  flex-direction: column;

  width: 100%;
`

export const HeaderTopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 37px;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['color-header-top-bar']};
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 70rem;

  margin: 2rem auto;

  & > img {
    width: 4rem;
    height: auto;

    cursor: pointer;
  }

  input {
    height: 48px;

    border: 0;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;

    padding: 0 1rem;

    background: ${(props) => props.theme['base-input']};
  }
`

export const MenuContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0 2rem;
`

export const MenuLink = styled(NavLink)`
  display: flex;
  flex-direction: column;

  font-size: 1.25rem;
  font-weight: bold;
  text-decoration: none;
  color: ${(props) => props.theme['base-text']};

  position: relative;

  & > span {
    position: absolute;
    width: 100%;
    height: 7px;
    background: ${(props) => props.theme['base-button-hover']};
    margin-top: 20px;
    z-index: -1;
  }
`

export const SearchContainer = styled.form`
  display: flex;
  flex-direction: row;

  & > button {
    display: flex;
    align-items: center;
    justify-content: center;

    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    background: ${(props) => props.theme['base-button']};
    padding: 0 1rem;

    border: 0;

    &:hover {
      transition: background-color 0.2s ease;
      background: ${(props) => props.theme['icon-instagram']};
    }

    & svg {
      color: ${(props) => props.theme.white};
    }
  }

  @media (min-width: 425px) and (max-width: 768px) {
    input {
      display: none;
    }

    button {
      padding: 0.5rem;
      border-radius: 50%;
    }
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;

  margin-left: 1rem;

  gap: 1rem;
`

type ButtonContentProps = {
  variant: 'wishlist' | 'mybag'
}

export const ButtonContent = styled.button<ButtonContentProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  border: 2px dashed
    ${(props) => (props.variant === 'wishlist' ? '#dce086' : '#d7f5fa')};

  padding: 0.25rem;

  background: ${(props) =>
    props.variant === 'wishlist'
      ? props.theme['color-wishlist']
      : props.theme['color-mybag']};

  span {
    width: 1rem;
    height: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    position: absolute;
    margin-top: -50px;
    margin-right: -25px;

    font-family: 'Open sans', sans-serif;
    font-size: 0.625rem;
    color: ${(props) => props.theme.white};

    background: ${(props) => props.theme['base-button']};
  }
`
