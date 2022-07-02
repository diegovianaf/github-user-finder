import React from 'react'
import * as S from './styled'

const RepositoryItem = ({ name, description, linkToRepo, fullName }) => {
  return (
    <S.WrapperItem>
      <h2>{name}</h2>
      <a href={linkToRepo} target="_blank" rel="noopener noreferrer">{fullName}</a>
      <p>{description}</p>
    </S.WrapperItem>
  )
}

export default RepositoryItem
