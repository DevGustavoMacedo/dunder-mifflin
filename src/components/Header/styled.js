import styled, { css } from 'styled-components'

export const Header = styled.header`
  background-color: ${(props) => props.theme.colors.blue};
  padding: 8px 4px 2px;
  z-index: 2;
`

export const Menu = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;

  nav {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
      padding: 1rem;
      text-decoration: none;
      color: ${(props) => props.theme.colors.white};
      font-family: ${(props) => props.theme.fonts.primary};
      font-size: 1.2rem;
      border-radius: 1.4rem;

      :hover {
        background-color: #061d2d;
      }
    }
  }

  button {
    display: none;
    border: none;
  }

  div img {
    height: 80px !important;
  }

  @media (min-width: 1900px) {
    nav {
      a {
        padding: 1.6rem;
        font-size: 1.6rem;
      }
    }

    div img {
      height: 120px !important;
    }
  }

  @media (max-width: 1024px) {
    nav {
      a {
        padding: 0.8rem;
        font-size: 1rem;
      }
    }

    div img {
      height: 80px !important;
    }
  }

  @media (max-width: 576px) {
    button {
      display: inline-block;
      background-color: inherit;
      z-index: 5;
      margin-right: 10px;
    }

    div img {
      height: 65px !important;
    }

    nav {
      position: absolute;
      height: 90%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 3;
      background-color: ${(props) => props.theme.colors.blue};
      flex-direction: column;
      justify-content: center;
      opacity: 0;
      pointer-events: none;
      transition: 1s;
      transform: translateY(70px);

      ${({ isMenuMobileToggle }) =>
        isMenuMobileToggle &&
        css`
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0px);
          height: 100vh;
        `}

      a {
        border: 2px solid #061d2d;
        padding: 1.6rem 100%;

        :first-child {
          border-top-width: 4px;
        }

        :last-child {
          border-bottom-width: 4px;
        }
      }
    }
  }
`
