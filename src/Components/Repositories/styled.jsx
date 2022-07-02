import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import styled from 'styled-components'

export const WrapperTabs = styled(Tabs)`
  margin: 1rem auto;
`

export const WrapperTabList = styled(TabList)`
  display: flex;
  gap: 1rem;
  justify-content: center;
`

export const WrapperTab = styled(Tab)`
  background-color: #f3f4f6;
  border: 1px solid #51596b;
  border-radius: .5rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  user-select: none;

  &:hover {
    background-color: #dce1e9;
  }

  &:focus {
    outline: none;
  }

  &.is-selected {
    background-color: #51596b;
    color: #fff;
  }
`

export const WrapperTabPanel = styled(TabPanel)`
  display: none;
  margin: 1rem auto;

  &.is-selected {
    display: block;
  }
`

export const WrapperList = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
`
