import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0 30px;
  width: 100%;

  h1, h2 {
    color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: 400;
    text-align: center;
    margin: 25px 0;
    font-size: 1.4rem;
    letter-spacing: 0.5px;
  }

  h2 {
    margin: 0;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.secondary};
  }

  iframe {
    border: none;
    height: 160px;
    margin-top: 1rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;

    li {
      background-color: ${(props) => props.theme.colors.primary};
      padding: 0.7rem 1rem;
      margin: 0 0 1rem;
      border-radius: 15px;
      width: 90%;
      max-width: 700px;
      cursor: pointer;
    }
  }

  @media (min-width: 1900px) {

    h1 {
      margin: 30px 0 20px;
      font-size: 2rem;
    }

    h2 {
      font-size: 1.4rem;
    }

    ul li {
      max-width: 1200px;
      padding: 1.2rem 2rem;
      margin: 0 0 1.4rem;
    }

    iframe {
      height: 360px;
    }
  }

  @media (max-width: 768px) {
    h1 {
      margin: 15px 0;
      font-size: 1.2rem;
    }

    h2 {
      font-size: 0.8rem;
    }

    ul li {
      padding: 0.5rem 1rem;
      margin: 0 0 0.5rem;
    }

    iframe {
      height: 85px;
    }
  }
`
