import React from 'react'
import * as S from './styled'

const Profile = () => {
  return (
    <S.Container>
      <S.UserAvatar src="https://avatars.githubusercontent.com/u/92064022?v=4" alt="User's Avatar" />
      <S.UserInfo>
        <S.UserHeader>
          <div>
            <h1>Diego Viana</h1>
            <S.UserNickName href="https://github.com/diegovianaf" target="_blank">@diegovianaf</S.UserNickName>
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
          <div>
            <img src="" alt="" />
            <p>Rio de Janeiro, Brazil</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Not available</p>
          </div>
          <div>
            <img src="" alt="" />
            <a href="https://www.linkedin.com/in/diegovianaf/" target="_blank">https://www.linkedin.com/in/diegovianaf/</a>
          </div>
          <div>
            <img src="" alt="" />
            <p>Not available</p>
          </div>
        </S.UserExtraInfo>
      </S.UserInfo>
    </S.Container>
  )
}

export default Profile
