import React, { useState } from 'react'
import searchIcon from '../../Assets/icons/search.svg'
import * as S from './styled'
import useGithub from '../../Hooks/useGithub'

const Header = () => {
  const { getUser } = useGithub()
  const [usernameForSearch, setUsernameForSearch] = useState()

  const submitGetUser = () => {
    if (!usernameForSearch) return
    return getUser(usernameForSearch)
  }

  return (
    <header>
      <S.Title>GitHub User Finder</S.Title>
      <S.LabelContainer htmlFor="searchInput">
        <img src={searchIcon} alt="" htmlId="searchInput" />
        <input
          type="text"
          id="searchInput"
          placeholder="Search GitHub username..."
          onChange={(event) => setUsernameForSearch(event.target.value)}
        />
        <button type="submit" onClick={submitGetUser}>Search</button>
      </S.LabelContainer>
    </header>
  )
}

export default Header
