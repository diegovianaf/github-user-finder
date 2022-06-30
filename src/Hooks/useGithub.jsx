import { useContext } from 'react'
import { GithubContext } from '../Providers/GithubProvider'

const useGithub = () => {
  const { githubState, getUser } = useContext(
    GithubContext
  )

  return { githubState, getUser }
}

export default useGithub
