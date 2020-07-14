import React from 'react'
import { SWRConfig } from 'swr'
import styled, { createGlobalStyle } from 'styled-components'
import { Router } from '@reach/router'
import { fetcher } from './api'
import { PopupProvider } from './state'
import Home from './components/home'
import Detail from './components/detail'
import ScrollToTop from './components/scrollToTop'
import Popup from './components/popup'

const App = () => {
  return (
    <SWRConfig
      value={{ fetcher, shouldRetryOnError: false, dedupingInterval: 60000 }}
    >
      <Global />
      <PopupProvider>
        <Main>
          <Popup />
          <Router>
            <ScrollToTop path="/">
              <Home path="/" />
              <Detail path="/:cityId" />
            </ScrollToTop>
          </Router>
        </Main>
      </PopupProvider>
    </SWRConfig>
  )
}

export default App

const Global = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const Main = styled.main`
  padding: 0 5%;
  margin: 0 auto;
  max-width: 1200px;
`
