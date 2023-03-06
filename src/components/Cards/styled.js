import styled from 'styled-components'

export const Container = styled.section`
  margin: 0 auto;
  padding: 0 0 30px;
  width: 95%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    width: 90%;
  }
`

export const Wrapper = styled.div`
  padding: 1.2rem;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 0 2rem 2rem 0;
  position: sticky;
  top: 0px;

  :nth-child(n + 5) {
    margin-top: 4rem;
  }

  @media (max-width: 576px) {
    :nth-child(n + 2) {
      margin-top: 2rem;
    }
  }
`

export const Card = styled.div`
  width: 100%;
  border-radius: 0 2rem 2rem 0;
  background-color: ${(props) => props.theme.colors.secondary};

  @keyframes spin {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }

  > span img {
    width: 100% !important;
    height: 350px !important;
    object-fit: cover;
    border-radius: 0 1.6rem 2rem 0;
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.fonts.secondary};
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 0.5px;

    > span img {
      cursor: pointer;
      height: 30px !important;
      animation: spin 1s 2 linear;
    }
  }

  @media (min-width: 2200px) {
    > span img {
      height: 500px !important;
    }

    > div {
      padding: 15px 30px;
      font-size: 1.5rem;

      > span img {
        height: 50px !important;
      }
    }
  }

  @media (max-width: 576px) {
    > span img {
      height: 450px !important;
    }
  }

  @media (max-width: 425px) {
    > div {
      padding: 5px 20px;
      font-size: 0.9rem;
    }

    > span img {
      height: 275px !important;
    }
  }
`
