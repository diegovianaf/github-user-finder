import React from 'react'
import * as S from './styled'
import locationIcon from '../../Assets/icons/location.svg'
import twitterIcon from '../../Assets/icons/twitter.svg'
import linkIcon from '../../Assets/icons/link.svg'
import buildingIcon from '../../Assets/icons/building.svg'


const Profile = () => {
  return (
    <S.Container>
      <S.UserAvatar src="https://avatars.githubusercontent.com/u/92064022?v=4" alt="User's Avatar" />
      <S.UserInfo>
        <S.UserHeader>
          <div>
            <h1>Diego Viana</h1>
            <S.UserNickName
              href="https://github.com/diegovianaf"
              target="_blank"
              rel="noreferrer"
            >
              @diegovianaf
            </S.UserNickName>
          </div>
          <p>Joined Oct 6, 2021</p>
        </S.UserHeader>
        <S.UserBio>Graduated in Business Administration (BBA), with skills in Communication, and looking forward to starting my career as a Frontend Developer</S.UserBio>
        <S.UserNumbers>
          <div>
            <p>Repos</p>
            <span>29</span>
          </div>
          <div>
            <p>Gists</p>
            <span>0</span>
          </div>
          <div>
            <p>Followers</p>
            <span>3</span>
          </div>
          <div>
            <p>Following</p>
            <span>6</span>
          </div>
        </S.UserNumbers>
        <S.UserExtraInfo>
          <S.ExtraInfoItems>
            <S.RegularIcon src={locationIcon} />
            <p>Rio de Janeiro, Brazil</p>
          </S.ExtraInfoItems>
          <S.ExtraInfoItems>
            <S.SmallIcon src={twitterIcon} />
            <p>Not available</p>
          </S.ExtraInfoItems>
          <S.ExtraInfoItems>
            <S.SmallIcon src={linkIcon} />
            <a 
              href="https://www.linkedin.com/in/diegovianaf/"
              target="_blank"
              rel="noreferrer"
            >
              https://www.linkedin.com/in/diegovianaf/
            </a>
          </S.ExtraInfoItems>
          <S.ExtraInfoItems>
            <S.RegularIcon src={buildingIcon} />
            <p>Not available</p>
          </S.ExtraInfoItems>
        </S.UserExtraInfo>
      </S.UserInfo>
    </S.Container>
  )
}

export default Profile
