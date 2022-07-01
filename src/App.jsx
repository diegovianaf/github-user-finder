import GlobalStyle from './Assets/globalStyles'
import Layout from './Components/Layout/Layout'
import Profile from './Components/Profile/Profile'
import Repositories from './Components/Repositories/Repositories'
import useGithub from './Hooks/useGithub'
import GithubProvider from './Providers/GithubProvider'

const App = () => {
  const { githubState } = useGithub()

  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <p>Loading...</p>
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <></>
      )}
    </Layout>
  )
}

export default App
