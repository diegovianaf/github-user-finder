import styled from 'styled-components'

export const Container = styled.section`
  align-items: flex-start;
  background-color: #fff;
  border-radius: .5rem;
  display: flex;
  gap: 1.25rem;
  justify-content: space-between;
  margin: 1rem auto;
  padding: 2.5rem 2rem;
`

export const UserAvatar = styled.img`
  border-radius: 50%;
  max-width: 178px;
`

export const UserInfo = styled.article`
  display: flex;
  flex-direction: column;
  gap: .75rem;
`

export const UserHeader = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 1rem;
  justify-content: space-between;

  h2 {
    font-size: 1.75rem;
    line-height: 1;
    margin-bottom: .25rem;
  }

  p {
    font-size: 1.125rem;
  }

  a {
    color: #2563eb;
    font-size: 1.125rem;

    &:hover {
      color: #0741be;
    }
  }
`

export const UserBio = styled.p`
  color: #51596b;
  line-height: 1.5;
`

export const UserNumbers = styled.div`
  background-color: #f3f4f6;
  border-radius: .5rem;
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  line-height: 1.4;
  padding: 1rem;

  p {
    font-size: 1.125rem;
  }

  span {
    font-size: 1.25rem;
  }
`

export const UserExtraInfo = styled.div`
  display: grid;
  gap: .5rem 1.5rem;
  grid-template-columns: 2fr 1fr;
  padding: .5rem 0;
`

export const ExtraInfoItems = styled.div`
  align-items: center;
  color: #51596b;
  display: flex;

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
