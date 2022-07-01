import React from 'react'
import App from '../App'
import GlobalStyle from '../Assets/globalStyles'
import GithubProvider from './GithubProvider'

const Providers = () => {
  return (
    <GithubProvider>
      <GlobalStyle />
      <App />
    </GithubProvider>
  )
}

export default Providers
