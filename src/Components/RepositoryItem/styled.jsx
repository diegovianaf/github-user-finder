import styled from 'styled-components'

export const WrapperItem = styled.div`
  background-color: #fff;
  border-radius: .5rem;
  box-shadow: #51596b33 2px 4px 8px;
  padding: 1rem;

  a {
    color: #2563eb;
    display: block;
    line-break: anywhere;
    margin: .25rem 0 .5rem;

    &:hover {
      color: #0741be;
    }
  }

  p {
    color: #51596b;
    line-height: 1.2;
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 1rem;
    }

    p {
      font-size: .875rem;
    }
  }
`
