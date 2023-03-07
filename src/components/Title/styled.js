import styled from 'styled-components'

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.blue};
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: 400;
  text-align: center;
  margin: 1.5rem 0;
  font-size: 1.6rem;
  letter-spacing: 0.5px;

  @media (max-width: 576px) {
    margin: 1rem 0;
    font-size: 1.4rem;
  }
`
