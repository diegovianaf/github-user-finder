import GlobalStyle from './Assets/globalStyles'
import Layout from './Components/Layout/Layout'
import Profile from './Components/Profile/Profile'

const App = () => {
  return (
    <main>
      <GlobalStyle />
      <Layout>
      <Profile />
      <section>Repositories</section>
      <section>Starreds</section>
      </Layout>
    </main>
  )
}

export default App
