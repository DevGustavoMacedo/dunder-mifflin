import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: ${(props) => props.theme.fonts.secondary};
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 1.4rem;
  margin: 2rem auto 4rem;
  width: 90%;
  overflow-x: hidden;
  padding: 0 2rem;

  legend {
    font-weight: bold;
    margin: 30px 0;
    text-align: center;
    width: 100%;
    font-size: 1.2rem;
  }

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input,
  select,
  textarea,
  button {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border-radius: 0.8rem;
    border-style: none;
    outline: none;
    font-family: ${(props) => props.theme.fonts.secondary};
    background-color: ${(props) => props.theme.colors.secondary};
  }

  textarea {
    height: 100px;
  }

  option {
    background-color: ${(props) => props.theme.colors.tertiary};
  }

  span {
    font-size: 0.7rem;
    display: inline-block;
    margin-top: 5px;
    padding: 5px;
    background-color: rgba(255, 0, 0, 0.5);
  }

  button {
    width: 70px;
    margin: 30px 0;
    color: ${(props) => props.theme.colors.primary};
    font-size: 1rem;
    font-family: ${(props) => props.theme.fonts.primary};
    letter-spacing: 1px;
    background-color: ${(props) => props.theme.colors.tertiary};
    cursor: pointer;

    :disabled {
      opacity: 0.2;
      cursor: none;
    }
  }

  @media (min-width: 1900px) {
    margin-top: 60px;
    padding: 0 50px;

    legend {
      margin: 40px 0;
      font-size: 1.8rem;
    }

    input,
    select,
    textarea,
    button,
    label {
      font-size: 1.4rem;
    }

    option {
      font-size: 0.9rem;
    }

    button {
      width: 150px;
      margin: 50px 0;
    }
  }

  @media (max-width: 576px) {
    legend {
      margin: 30px 0 20px;
      font-size: 1.1rem;
    }

    label {
      font-size: 0.9rem;
    }

    button {
      width: 55px;
      font-size: 0.9rem;
    }
  }
`

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  width: 100%;
  gap: 20px;
  justify-content: space-between;
  margin-bottom: 15px;

  @media (min-width: 1900px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 50px;
    margin-bottom: 30px;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`
