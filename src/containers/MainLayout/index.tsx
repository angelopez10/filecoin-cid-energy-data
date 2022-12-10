import { Wrapper } from "../../components/layout/Wrapper";
import { MainLayoutContainer } from "./MainLayout.styles";
import { Content } from "../Content";

interface MainLayoutProps {
  error?: string;
  data?: any;
}

function MainLayout({ error, data }: MainLayoutProps) {
  return (
    <Wrapper>
      <MainLayoutContainer centeredContent={!!error}>
        {error && <h1>{error}</h1>}
        {data && <Content data={data} />}
      </MainLayoutContainer>
    </Wrapper>
  );
}

export default MainLayout;
