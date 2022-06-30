import React, { createContext, useState } from 'react'

export const GithubContext = createContext({
  user: {},
  repositories: [],
  stars: [],
})

const GithubProvider = ({ children }) => {
  const [githubState, setGithubState] = useState({
    user: {
      avatar_url: undefined,
      name: 'Diego Viana',
      html_url: undefined,
      login: 'diegovianaf',
      created_at: undefined,
      bio: undefined,
      public_repos: 0,
      public_gists: 0,
      followers: 0,
      following: 0,
      location: undefined,
      twitter_username: undefined,
      blog: undefined,
      company: undefined,
    },
    repositories: [],
    stars: [],
  })

  const contextValue = {
    githubState,
  }

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubProvider
