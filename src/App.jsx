import GlobalStyle from './Assets/globalStyles'
import Layout from './Components/Layout/Layout'
import Profile from './Components/Profile/Profile'
import Repositories from './Components/Repositories/Repositories'
import GithubProvider from './Providers/GithubProvider'

const App = () => {
  return (
    <>
      <GithubProvider>
        <GlobalStyle />
        <Layout>
          <Profile />
          <Repositories />
        </Layout>
      </GithubProvider>
    </>
  )
}

export default App
