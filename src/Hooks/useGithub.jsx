import { useContext } from 'react'
import { GithubContext } from '../Providers/GithubProvider'

const useGithub = () => {
  const { githubState } = useContext(
    GithubContext
  )

  return { githubState }
}

export default useGithub
