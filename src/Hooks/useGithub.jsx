import { useContext } from 'react'
import { GithubContext } from '../Providers/GithubProvider'

const useGithub = () => {
  const { githubState, getUser, getUserRepos } = useContext(
    GithubContext
  )

  return { githubState, getUser, getUserRepos }
}

export default useGithub
