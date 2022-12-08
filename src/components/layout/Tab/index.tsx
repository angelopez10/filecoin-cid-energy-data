import React from 'react'
import { ActiveTabsType } from '../../../containers/Content'
import { Container, SingleTab } from './Tab.styles'


interface TabProps {
  toggleTab: (tab: ActiveTabsType) => void;
  active: ActiveTabsType;
}

export function Tab({active, toggleTab}: TabProps){
  return (
    <Container>
      <SingleTab 
        active={active === 'list'} 
        onClick={() => toggleTab('list')}
      >
        List
      </SingleTab>
      <SingleTab 
        active={active === 'map'} 
        onClick={() => toggleTab('map')}
      >
        Map
      </SingleTab>
    </Container>
  )
}