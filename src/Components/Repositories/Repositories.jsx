import React, { useEffect, useState } from 'react'
import useGithub from '../../Hooks/useGithub'
import RepositoryItem from '../RepositoryItem/RepositoryItem'
import * as S from './styled'

const Repositories = () => {
  const { githubState, getUserRepos, getUserStars } = useGithub()
  const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState(false)

  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login)
      getUserStars(githubState.user.login)
    }
  
    setHasUserForSearchRepos(githubState.repositories)
 
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [githubState.user.login])

  return (
    <>
     {hasUserForSearchRepos ? (
        <S.WrapperTabs
          selectedTabClassName='is-selected'
          selectedTabPanelClassName='is-selected'
        >
          <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Stars</S.WrapperTab>
          </S.WrapperTabList>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {githubState.repositories.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {githubState.stars.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  description={item.description}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
        </S.WrapperTabs>
      ) : (
        <></>
      )}
    </>
  )
}

export default Repositories
