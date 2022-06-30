import React from 'react'
import searchIcon from '../../Assets/icons/search.svg'
import * as S from './styled'

const Header = () => {
  return (
    <header>
      <S.Title>GitHub User Finder</S.Title>
      <S.LabelContainer htmlFor="searchInput">
        <img src={searchIcon} alt="" htmlId="searchInput" />
        <input
          type="text"
          id="searchInput"
          placeholder="Search GitHub username..."
        />
        <button type="submit">Search</button>
      </S.LabelContainer>
    </header>
  )
}

export default Header
