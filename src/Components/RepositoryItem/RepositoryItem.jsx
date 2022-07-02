import React from 'react'
import * as S from './styled'

const RepositoryItem = ({ name, description, linkToRepo, fullName }) => {
  return (
    <S.WrapperItem>
      <h3>{name}</h3>
      <a href={linkToRepo} target="_blank" rel="noopener noreferrer">{fullName}</a>
      <p>{description}</p>
    </S.WrapperItem>
  )
}

export default RepositoryItem
