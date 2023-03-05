import styled from 'styled-components'

export const Container = styled.div`
  max-width: 100%;
  display: flex;
  margin: 0 auto;
  gap: 20px;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1900px) {
  }

  @media (max-width: 900px) {
    width: 95%;
    gap: 20px;
  }

  @media (max-width: 576px) {
    position: relative;
    width: 100%;
    gap: 0px;
  }
`

export const Button = styled.button`
  border: none;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 4px 5px 2px;
  border-radius: 50%;
  cursor: ${({ disabled }) => (disabled === true ? 'unset' : 'pointer')};
  opacity: ${({ disabled }) => (disabled === true ? 0.2 : 1)};

  span {
    width: 40px !important;
  }

  span img {
    width: 100% !important;
  }

  :not(:disabled) {
    :hover {
      opacity: 0.8;
    }
  }

  @media (min-width: 1900px) {
    span {
      width: 60px !important;
    }
  }

  @media (max-width: 900px) {
    span {
      width: 30px !important;
    }
  }

  @media (max-width: 576px) {
    position: absolute;
    z-index: 2;
    bottom: 10px;

    :first-child {
      left: 5px;
    }

    :last-child {
      right: 5px;
    }
  }
`

export const Carousel = styled.div`
  display: flex;
  overflow-x: auto;
  /* scroll-behavior: auto; */

  ::-webkit-scrollbar {
    display: none;
  }
`

export const Slide = styled.div`
  width: 100%;
  flex: none;

  span {
    width: 100% !important;
  }

  span img {
    height: 560px !important;
    border-radius: 1.4rem;
    object-fit: cover;
  }

  @media (min-width: 1900px) {
    span img {
      height: 720px !important;
    }
  }

  @media (max-width: 900px) {
    span img {
      height: 420px !important;
    }
  }

  @media (max-width: 576px) {
    span img {
      height: 250px !important;
    }
  }
`
