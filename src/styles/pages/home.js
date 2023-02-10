import styled from 'styled-components'

export const Home = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  position: relative;

  h2 {
    margin-bottom: 1rem;
    color: ${(props) => props.theme.colors.secondary};
    font-weight: 400;
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: 2.2rem;
    text-shadow: -1px -1px 10px ${(props) => props.theme.colors.primary},
      -1px 1px 10px ${(props) => props.theme.colors.primary},
      1px -1px 10px ${(props) => props.theme.colors.primary},
      1px 1px 10px ${(props) => props.theme.colors.primary};
    letter-spacing: 0.25rem;
    z-index: 1;
  }

  @media (min-width: 2000px) {
    h2 {
      font-size: 3.5rem;
    }
  }

  @media (max-width: 1024px) {
    /* background-position: center; */

    h2 {
      font-size: 1.3rem;
      margin-bottom: 5rem;
      padding: 0 1.2rem;
    }
  }
`
