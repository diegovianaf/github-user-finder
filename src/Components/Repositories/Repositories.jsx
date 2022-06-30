import React from 'react'
import RepositoryItem from '../RepositoryItem/RepositoryItem'
import * as S from './styled'

const Repositories = () => {
  return (
    <S.WrapperTabs 
      selectedTabClassName='is-selected'
      selectedTabPanelClassName='is-selected'
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Stars</S.WrapperTab>
      </S.WrapperTabList>
      <S.WrapperTabPanel>
        <RepositoryItem
          name='insta-loginpage'
          description='Challenge from DIO to rebuild the Instagram login page using CSS with Flexbox.'
          linkToRepo='https://github.com/diegovianaf/insta-loginpage'
          fullName='diegovianaf/insta-loginpage'
        />
      </S.WrapperTabPanel>
      <S.WrapperTabPanel>
        <RepositoryItem
          name='diegovianaf'
          description=''
          linkToRepo='https://github.com/diegovianaf/diegovianaf'
          fullName='diegovianaf/diegovianaf'
        />
      </S.WrapperTabPanel>
    </S.WrapperTabs>
  )
}

export default Repositories
