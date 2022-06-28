import GlobalStyle from './Assets/globalStyles'
import Layout from './Components/Layout/Layout'
import Profile from './Components/Profile/Profile'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
      <Profile />
      <section>Repositories</section>
      <section>Starreds</section>
      </Layout>
    </>
  )
}

export default App
