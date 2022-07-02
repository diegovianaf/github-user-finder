import Layout from './Components/Layout/Layout'
import Loading from './Components/Loading/Loading'
import NoSearch from './Components/NoSearch/NoSearch'
import Profile from './Components/Profile/Profile'
import Repositories from './Components/Repositories/Repositories'
import useGithub from './Hooks/useGithub'

const App = () => {
  const { githubState } = useGithub()

  return (
    <Layout>
      {githubState.hasUser ? (
        <>
          {githubState.loading ? (
            <Loading />
          ) : (
            <>
              <Profile />
              <Repositories />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  )
}

export default App
