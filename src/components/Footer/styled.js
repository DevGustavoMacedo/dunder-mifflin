import styled from 'styled-components'

export const Footer = styled.footer`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.blue};
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 0.9rem;
  font-family: ${(props) => props.theme.fonts.primary};
  margin-top: 4rem;

  span a {
    text-decoration: none;
    margin-left: 5px;
    color: #adbaca;
  }

  @media (max-width: 550px) {
    font-size: 0.7em;
    margin-top: 2rem;
    height: 30px;
  }
`
