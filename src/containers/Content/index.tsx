import { useState } from "react";
import { Tab } from "../../components/layout/Tab";
import { AggregateAndTabContent, Container } from "./Content.styles";
import Map from "../../components/layout/Map";
import { AggregateData } from '../../components/layout/AggregateData';
import { MinerList } from '../../components/layout/MinerList';

export type ActiveTabsType = "list" | "map";

export function Content({ data }: any) {
  const [active, setActive] = useState<ActiveTabsType>("list");

  function toggleTab(tab: ActiveTabsType) {
    setActive(tab);
  }

  return (
    <Container>
      <Tab active={active} toggleTab={toggleTab} />
      <AggregateAndTabContent>
      {data?.aggregate && data?.miners && 
        <>
          <AggregateData data={data?.aggregate}/>
          {active === "list" && <MinerList miners={data?.miners} />}
          {active === "map" && <Map data={data} />}
        </>
      }
      </AggregateAndTabContent>
    </Container>
  );
}
