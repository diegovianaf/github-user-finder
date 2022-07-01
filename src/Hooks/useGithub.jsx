import { useContext } from 'react'
import { GithubContext } from '../Providers/GithubProvider'

const useGithub = () => {
  const { githubState, getUser, getUserRepos, getUserStars } = useContext(
    GithubContext
  )

  return { githubState, getUser, getUserRepos, getUserStars }
}

export default useGithub
