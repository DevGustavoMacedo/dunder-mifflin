import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  h2,
  h3 {
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: 400;
    text-align: center;
    letter-spacing: 0.4px;
    margin: 0;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.secondary};
  }

  h3 {
    font-size: 0.7rem;
  }

  iframe {
    border: none;
    height: 160px;
    margin-top: 1rem;
    animation: slide 1s ease-out;
  }

  @keyframes slide {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
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
      border-radius: 1rem;
      width: 90%;
      max-width: 700px;
      cursor: pointer;

      :last-child {
        margin-bottom: 0;
      }
    }
  }

  @media (min-width: 1900px) {
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
    h2 {
      font-size: 0.8rem;
    }

    ul li {
      padding: 0.5rem;
      margin: 0 0 0.5rem;
      width: 98%;
    }

    iframe {
      height: 85px;
    }
  }
`
