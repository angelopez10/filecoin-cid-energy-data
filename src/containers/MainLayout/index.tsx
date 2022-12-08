import { Wrapper } from "../../components/layout/Wrapper";
import { MainLayoutContainer } from "./MainLayout.styles";
import { Content } from '../Content';

interface MainLayoutProps {
  error?: string;
  data?: any;
}

function MainLayout({error, data = true}: MainLayoutProps) {
  return (
    <Wrapper>
      <MainLayoutContainer centeredContent={!!error}>
        {error && <h1>{error}</h1>}
        {data &&  <Content />}
      </MainLayoutContainer>
    </Wrapper>
  );
}

export default MainLayout;
