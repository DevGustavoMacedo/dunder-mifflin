import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    background-color: #f0f0ff;
    overflow: hidden;
  }

  body::-webkit-scrollbar {
    width: 10px;
    height: 100%;
  }

  body::-webkit-scrollbar-track {
    background-color: #adbaca;
  }

  body::-webkit-scrollbar-thumb {
    background-color: #0a2d46;
  }

  @media (max-width: 576px) {
  ::-webkit-scrollbar {
    display: none;
    
  }
}

  ::selection {
    color: #f0f0ff;
    background-color: #0a2d46;
  }
`

const theme = {
  colors: {
    blue: '#0a2d46',
    white: '#f0f0ff',
    gray: '#adbaca',
  },
  fonts: {
    primary: 'Anton, sans-serif',
    secondary: 'Lato, sans-serif',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
