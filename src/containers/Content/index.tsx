import { useState } from 'react';
import { Tab } from '../../components/layout/Tab';
import { Container } from './Content.styles';

export type ActiveTabsType = 'list' | 'map';

export function Content() {
  const [active, setActive] = useState<ActiveTabsType>('list');

  function toggleTab(tab: ActiveTabsType) {
    setActive(tab);
  }

  return (
    <Container>
      <Tab active={active} toggleTab={toggleTab}/>
    </Container>
  )
}
