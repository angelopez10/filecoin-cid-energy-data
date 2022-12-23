import { Wrapper } from "../../components/layout/Wrapper";
import {  ErrorText, MainLayoutContainer, StyledLoader } from "./MainLayout.styles";
import { Content } from "../Content";
interface MainLayoutProps {
  error?: string;
  data?: any;
  loading?: boolean;
}

function MainLayout({ error, data, loading }: MainLayoutProps) {
  return (
    <Wrapper>
      <MainLayoutContainer centeredContent={!!error}>
        {!loading && error && <ErrorText>{error}</ErrorText>}
        {!loading && !error && data && <Content data={data} />}
        {loading && <StyledLoader /> }
      </MainLayoutContainer>
    </Wrapper>
  );
}

export default MainLayout;
