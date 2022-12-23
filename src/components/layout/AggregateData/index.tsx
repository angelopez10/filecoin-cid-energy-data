import React from 'react';
import { BlocksColumn, ColumnsContainer, Container, DataBlock, DataLabel, DataText } from './AggregateData.styles';

interface AgrgegateDataProps {
  data?: any;
}

export function AggregateData({data}: AgrgegateDataProps) {
  return (
    <Container>
      <DataBlock>
        <DataLabel isTitle>Total Energy Consuption</DataLabel> 
      </DataBlock>
      <ColumnsContainer>
        <BlocksColumn>
          <DataBlock>
            <DataLabel>Estimate (KW)</DataLabel>
            <DataText>{data?.totalEnergyConsuption?.estimateKw || '-'}</DataText>
          </DataBlock>
          <DataBlock>
            <DataLabel>High Bound (KW)</DataLabel>
            <DataText>{data?.totalEnergyConsuption?.highBoundKw || '-'}</DataText>
          </DataBlock>
          <DataBlock>
            <DataLabel>Low Bound (KW)</DataLabel>
            <DataText>{data?.totalEnergyConsuption?.lowBoundKw || '-'}</DataText>
          </DataBlock>
          <DataBlock>
            <DataLabel>Total Data Stored</DataLabel>
            <DataText>{data?.totalDataStored || '-'}</DataText>
          </DataBlock>
        </BlocksColumn>
        <BlocksColumn>
          <DataBlock>
            <DataLabel>Total Wind Purchases</DataLabel>
            <DataText>{data?.totalEnergyPurchasesByType?.WIND || '-'}</DataText>
          </DataBlock>
          <DataBlock>
            <DataLabel>Total Solar Purchases</DataLabel>
            <DataText>{data?.totalEnergyPurchasesByType?.SOLAR || '-'}</DataText>
          </DataBlock>
          <DataBlock>
            <DataLabel>Total Hydro Purchases</DataLabel>
            <DataText>{data?.totalEnergyPurchasesByType?.HYDRO || '-'}</DataText>
          </DataBlock>
          <DataBlock>
            <DataLabel>Total Bio Purchases</DataLabel>
            <DataText>{data?.totalEnergyPurchasesByType?.BIOMASS || '-'}</DataText>
          </DataBlock>
        </BlocksColumn>
      </ColumnsContainer>
    </Container>
  )
}