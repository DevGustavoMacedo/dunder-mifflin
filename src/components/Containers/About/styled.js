import styled from 'styled-components'

export const Container = styled.section`
  margin: 0 auto;
  padding: 0 0 30px;
  width: 90%;

  h2 {
    color: ${(props) => props.theme.colors.blue};
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: 400;
    text-align: center;
    letter-spacing: 0.5px;
    font-size: 1.3rem;
    margin: 60px 0 20px;
  }

  p {
    font-family: sans-serif;
    line-height: 1.5rem;
    font-size: 1.1rem;
    text-align: justify;
  }

  blockquote {
    border: 5px dashed ${(props) => props.theme.colors.blue};
    padding: 10px 40px;
    border-radius: 0 2rem 2rem 0;

    ul li {
      font-family: sans-serif;
      line-height: 1.5rem;
      font-size: 1.1rem;
      text-align: justify;
      list-style-type: square;
      margin: 20px 0;

      ::marker {
        color: ${(props) => props.theme.colors.blue};
        font-size: 1.5rem;
      }
    }
  }

  @media (min-width: 1900px) {
    padding: 0 0 80px;

    h2 {
      font-size: 1.8rem;
      margin: 80px 0 20px;
    }

    p {
      line-height: 2.4rem;
      font-size: 1.6rem;
    }

    blockquote {
      padding: 10px 60px;
      width: fit-content;

      ul li {
        line-height: 2.4rem;
        font-size: 1.6rem;
        margin: 30px 0;
      }
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    > div:last-child {
      width: 85%;
      margin: 0 auto;
    }

    h2 {
      font-size: 1rem;
      margin: 40px 0 15px;
    }

    p {
      font-size: 0.9rem;
    }

    blockquote {
      ul li {
        font-size: 0.9rem;
        margin: 10px 0;
      }
    }
  }
`

export const HistoryImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px 0 20px !important;

  span img {
    border-radius: 1.4rem;
    height: 450px !important;
  }

  @media (min-width: 1900px) {
    margin: 20px 0 40px !important;

    span img {
      height: 525px !important;
    }
  }

  @media (max-width: 768px) {
    span img {
      height: 250px !important;
    }
  }
`

export const DiversityGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.blue};
  gap: 10px;
  padding: 10px;
  border-radius: 0 2rem 2rem 0;

  span img {
    border-radius: 1.4rem;
    height: 450px !important;
    object-fit: cover;
    object-position: top;
  }

  @media (min-width: 1900px) {
    gap: 30px;
    padding: 30px;

    span img {
      height: 713px !important;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;

    span img {
      height: 250px !important;
    }
  }
`
