import GlobalStyle from './Assets/globalStyles'
import Layout from './Components/Layout/Layout'
import Profile from './Components/Profile/Profile'
import Repositories from './Components/Repositories/Repositories'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Profile />
        <Repositories />
      </Layout>
    </>
  )
}

export default App
