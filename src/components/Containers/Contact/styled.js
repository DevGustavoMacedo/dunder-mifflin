import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  color: ${(props) => props.theme.colors.blue};
  font-family: ${(props) => props.theme.fonts.primary};
  letter-spacing: 0.5px;
  text-transform: uppercase;

  > span img {
    border-radius: 1.4rem;
    height: 400px !important;
  }

  figcaption {
    padding: 10px 0;
    font-size: 0.8rem;

    span img {
      border-radius: 50%;
      height: 50px !important;
    }
  }

  @media (min-width: 1900px) {
    > span img {
      height: 585px !important;
    }

    figcaption {
      font-size: 1.1rem;

      span img {
        height: 60px !important;
      }
    }
  }
  @media (max-width: 576px) {
    > span img {
      height: 200px !important;
    }

    figcaption {
      padding: 5px 0;
      font-size: 0.7rem;

      span img {
        height: 30px !important;
      }
    }
  }
`
