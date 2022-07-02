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

  const handleKeypress = (e) => {
    if (e.key === 'Enter') submitGetUser()
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
          autoComplete="off"
          onChange={(event) => setUsernameForSearch(event.target.value)}
          onKeyPress={handleKeypress}
        />
        <button type="submit" onClick={submitGetUser}>Search</button>
      </S.LabelContainer>
    </header>
  )
}

export default Header
