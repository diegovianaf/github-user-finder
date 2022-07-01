import React, { createContext, useCallback, useState } from 'react'
import api from '../Services/api'

export const GithubContext = createContext({
  loading: false,
  user: {},
  repositories: [],
  stars: [],
})

const GithubProvider = ({ children }) => {
  const [githubState, setGithubState] = useState({
    hasUser: false,
    loading: false,
    user: {
      avatar_url: undefined,
      name: undefined,
      html_url: undefined,
      login: undefined,
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

  const getUser = (username) => {
    setGithubState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }))

    api
      .get(`users/${username}`)
      .then(({ data }) => {
        setGithubState((prevState) => ({
          ...prevState,
          hasUser: true,
          user: {
            avatar_url: data.avatar_url,
            name: data.name,
            html_url: data.html_url,
            login: data.login,
            created_at: data.created_at,
            bio: data.bio,
            public_repos: data.public_repos,
            public_gists: data.public_gists,
            followers: data.followers,
            following: data.following,
            location: data.location,
            twitter_username: data.twitter_username,
            blog: data.blog,
            company: data.company,
          },
        }))
    })
      .finally(() => {
        setGithubState((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }))
      })
  }

  const contextValue = {
    githubState,
    getUser: useCallback((username) => getUser(username), [])
  }

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubProvider
