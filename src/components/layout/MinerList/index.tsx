import React from 'react'
import { ListHeader } from './components/ListHeader';
import { ListContent } from './components/ListContent';
import { Container } from './MinerList.styles';

interface MinerListProps {
  miners?: any[];
}

export function MinerList({miners}: MinerListProps) {

  return (
    <Container>
      <ListHeader />
      {miners.map(miner => (
        <ListContent miner={miner} key={miner?.minerId}/>
      ))}
    </Container>
  )
}
