import React, { createContext, useState } from 'react'

export const GithubContext = createContext({
  user: {},
  repositories: [],
  stars: [],
})

const GithubProvider = ({ children }) => {
  const [githubState, setGithubState] = useState({
    user: {
      name: 'Diego Viana',
      login: undefined,
      html_url: undefined,
      created_at: undefined,
      bio: undefined,
      public_repos: 0,
      public_gists: 0,
      followers: 0,
      following: 0,
      location: undefined,
      blog: undefined,
      twitter_username: undefined,
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
