import styled from 'styled-components'

const Home = styled.main`
  background-image: url('/assets/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  
  h2 {
    padding: 0 0 2rem;
    color: ${(props) => props.theme.colors.secondary};
    font-weight: 400;
    font-family: ${(props) => props.theme.fonts.primary};
    font-size: 2.2rem;
    text-shadow: -1px -1px 10px ${(props) => props.theme.colors.primary},
      -1px 1px 10px ${(props) => props.theme.colors.primary},
      1px -1px 10px ${(props) => props.theme.colors.primary},
      1px 1px 10px ${(props) => props.theme.colors.primary};
    letter-spacing: 0.25rem;
  }

  @media (min-width: 2000px) {
    h2 {
      font-size: 3.5rem;
    }
  }

  @media (max-width: 1024px) {
    background-position: center;

    h2 {
      font-size: 1.3rem;
      padding: 0.9rem 2rem 0;
    }
  }
`

export default Home