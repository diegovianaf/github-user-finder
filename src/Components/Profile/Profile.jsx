import React from 'react'
import * as S from './styled'
import locationIcon from '../../Assets/icons/location.svg'
import twitterIcon from '../../Assets/icons/twitter.svg'
import linkIcon from '../../Assets/icons/link.svg'
import buildingIcon from '../../Assets/icons/building.svg'
import useGithub from '../../Hooks/useGithub'

const Profile = () => {
  const { githubState } = useGithub()

  return (
    <S.Container>
      <S.UserAvatar src={githubState.user.avatar_url} alt="User's Avatar" />
      <S.UserInfo>
        <S.UserHeader>
          <div>
            <h2>{githubState.user.name}</h2>
            <a
              href={githubState.user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {githubState.user.login}
            </a>
          </div>
          <p>{githubState.user.created_at}</p>
        </S.UserHeader>
        <S.UserBio>{githubState.user.bio}</S.UserBio>
        <S.UserNumbers>
          <div>
            <p>Repos</p>
            <span>{githubState.user.public_repos}</span>
          </div>
          <div>
            <p>Gists</p>
            <span>{githubState.user.public_gists}</span>
          </div>
          <div>
            <p>Followers</p>
            <span>{githubState.user.followers}</span>
          </div>
          <div>
            <p>Following</p>
            <span>{githubState.user.following}</span>
          </div>
        </S.UserNumbers>
        <S.UserExtraInfo>
          <S.ExtraInfoItems>
            <S.RegularIcon src={locationIcon} />
            <p>{githubState.user.location}</p>
          </S.ExtraInfoItems>
          <S.ExtraInfoItems>
            <S.SmallIcon src={twitterIcon} />
            <p>{githubState.user.twitter_username}</p>
          </S.ExtraInfoItems>
          <S.ExtraInfoItems>
            <S.SmallIcon src={linkIcon} />
            <a 
              href={githubState.user.blog}
              target="_blank"
              rel="noreferrer"
            >
              {githubState.user.blog}
            </a>
          </S.ExtraInfoItems>
          <S.ExtraInfoItems>
            <S.RegularIcon src={buildingIcon} />
            <p>{githubState.user.company}</p>
          </S.ExtraInfoItems>
        </S.UserExtraInfo>
      </S.UserInfo>
    </S.Container>
  )
}

export default Profile
