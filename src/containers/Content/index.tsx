import { useState } from "react";
import { Tab } from "../../components/layout/Tab";
import { Container } from "./Content.styles";
import Map from "../../components/layout/Map";

export type ActiveTabsType = "list" | "map";

export function Content() {
  const [active, setActive] = useState<ActiveTabsType>("list");

  function toggleTab(tab: ActiveTabsType) {
    setActive(tab);
  }

  return (
    <Container>
      <Tab active={active} toggleTab={toggleTab} />
      {active === "map" && <Map />}
    </Container>
  );
}
