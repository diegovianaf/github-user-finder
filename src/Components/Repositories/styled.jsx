import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import styled from 'styled-components'

export const WrapperTabs = styled(Tabs)`
  text-align: center;
`

export const WrapperTabList = styled(TabList)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1rem;
`

export const WrapperTab = styled(Tab)`
  background-color: #f3f4f6;
  border: 1px solid #51596b;
  border-radius: .5rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  user-select: none;

  &:focus {
    outline: none;
  }

  &.is-selected {
    background-color: #51596b;
    color: #fff;
  }
`

export const WrapperTabPanel = styled(TabPanel)`
  background-color: #fff;
  border-radius: .5rem;
  display: none;
  padding: 1rem;

  &.is-selected {
    display: block;
  }
`
