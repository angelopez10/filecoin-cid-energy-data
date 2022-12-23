import React from 'react'
import { Container, ListRow } from './ListContent.styles';

interface ListContentProps {
  miner?: any;
}

export function ListContent({miner}: ListContentProps) {
  return (
    <Container>
      <ListRow>{miner?.minerId || '-'}</ListRow>
      <ListRow>{miner?.totalDataStored || '-'}</ListRow>
      <ListRow>{miner?.country || '-'}</ListRow>
      <ListRow>{miner?.city || '-'}</ListRow>
      <ListRow>{miner?.energyConsumption?.highBoundKw || '-'}</ListRow>
      <ListRow>{miner?.energyConsumption?.lowBoundKw || '-'}</ListRow>
      <ListRow>{miner?.energyConsumption?.estimateKw || '-'}</ListRow>
      <ListRow>{miner?.purchasesByEnergySource?.WIND || '-'}</ListRow>
      <ListRow>{miner?.purchasesByEnergySource?.SOLAR || '-'}</ListRow>
      <ListRow>{miner?.purchasesByEnergySource?.HYDRO || '-'}</ListRow>
      <ListRow>{miner?.purchasesByEnergySource?.BIOMASS || '-'}</ListRow>
    </Container>
  )
}
