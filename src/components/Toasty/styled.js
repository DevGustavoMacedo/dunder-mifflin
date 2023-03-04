import styled from 'styled-components'

export const Toasty = styled.div`
  position: fixed;
  right: ${({ isToasty }) => (isToasty.open ? '100px' : '-110vw')};
  bottom: 50px;
  font-family: ${(props) => props.theme.fonts.secondary};
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 1rem;
  padding: 10px;
  transition: all 700ms ease-in-out;
  max-width: 400px;
  padding: 20px;

  h4 {
    text-align: center;
    text-transform: uppercase;
  }

  p {
    margin: 10px 0;
    word-break: break-all;
  }

  b {
    color: ${(props) => props.theme.colors.primary};
  }

  @media (min-width: 1900px) {
    max-width: 900px;

    h4,
    p {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 576px) {
    right: ${({ isToasty }) => (isToasty.open ? '0' : '-110vw')};
    max-width: 250px;

    h4,
    p {
      font-size: 0.9rem;
    }
  }
`