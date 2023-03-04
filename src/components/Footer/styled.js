import styled from 'styled-components'

export const Footer = styled.footer`
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.primary};
  height: 50px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 0.9rem;
  font-family: ${(props) => props.theme.fonts.primary};

  span a {
    text-decoration: none;
    margin-left: 5px;
    color: #adbaca;
  }

  @media (max-width: 550px) {
    font-size: 0.7em;
    margin-top: 1.4rem;
    height: 30px;
  }
`
