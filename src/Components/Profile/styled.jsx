import styled from 'styled-components'

export const Container = styled.section`
  background-color: #fff;
  border-radius: .5rem;
  box-shadow: #51596b33 2px 4px 8px;
  display: grid;
  gap: 1.25rem;
  grid-template-areas:
    'UserAvatar UserHeader'
    'UserAvatar UserBio'
    'UserAvatar UserNumbers'
    'UserAvatar UserInfo'
  ;
  grid-template-columns: 1fr 4fr;
  margin: 1rem auto;
  padding: 2.5rem 2rem;

  @media (max-width: 680px) {
    grid-template-areas:
      'UserAvatar UserHeader'
      'UserBio UserBio'
      'UserNumbers UserNumbers'
      'UserInfo UserInfo'
    ;
  }

  @media (max-width: 480px) {
    gap: 1.125rem;
    padding: 1.5rem .75rem;
  }
`

export const UserAvatar = styled.img`
  border-radius: 50%;
  grid-area: UserAvatar;
  max-width: 160px;

  @media (max-width: 760px) {
    max-width: 140px;
  }

  @media (max-width: 560px) {
    max-width: 120px;
  }

  @media (max-width: 480px) {
    max-width: 100px;
  }

  @media (max-width: 420px) {
    max-width: 80px;
  }
`

export const UserHeader = styled.div`
  display: flex;
  gap: .25rem 1rem;
  grid-area: UserHeader;
  justify-content: space-between;

  h2 {
    font-size: 1.75rem;
    line-height: 1;
    margin-bottom: .25rem;

    @media (max-width: 680px) {
      font-size: 1.5rem;
    }

    @media (max-width: 560px) {
      font-size: 1.25rem;
    }
  }

  a {
    color: #2563eb;
    font-size: 1.25rem;

    &:hover {
      color: #0741be;
    }

    @media (max-width: 680px) {
      font-size: 1rem;
    }
  }

  p {
    font-size: 1.125rem;

    @media (max-width: 680px) {
      font-size: 1rem;
    }
  }

  @media (max-width: 680px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const UserBio = styled.p`
  color: #51596b;
  grid-area: UserBio;
  line-height: 1.3;
`

export const UserNumbers = styled.div`
  background-color: #f3f4f6;
  border-radius: .5rem;
  display: flex;
  gap: 1rem;
  grid-area: UserNumbers;
  justify-content: space-around;
  line-height: 1.4;
  padding: 1rem;

  p {
    font-size: 1.125rem;

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  span {
    font-size: 1.25rem;
    font-weight: 700;

    @media (max-width: 480px) {
      font-size: 1.125rem;
    }
  }

  @media (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
  }
`

export const UserInfo = styled.div`
  display: grid;
  gap: .5rem 2rem;
  grid-area: UserInfo;
  grid-template-columns: 2fr 1fr;
  padding: .5rem 0;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`

export const ExtraInfoItems = styled.div`
  align-items: center;
  color: #51596b;
  display: flex;
  line-break: anywhere;

  a:hover {
    color: #0741be;
  }
`

export const RegularIcon = styled.img`
  margin-right: 8px;
  max-width: 12px;
`

export const SmallIcon = styled.img`
  margin-right: 4px;
  max-width: 16px;
`
