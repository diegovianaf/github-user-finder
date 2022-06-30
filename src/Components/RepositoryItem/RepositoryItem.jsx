import React from 'react'

const RepositoryItem = ({ name, description, linkToRepo, fullName }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={linkToRepo} target="_blank" rel="noopener noreferrer">{fullName}</a>
    </div>
  )
}

export default RepositoryItem
