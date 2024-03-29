import Bar from "@/components/Bar/Bar";
import Container from "@/components/Container/Container";
import Navigation from "@/components/Navigation/Navigation";
import Sidebar from "@/components/Sidebar/Sidebar";
import Wrapper from "@/components/Wrapper/Wrapper";
import Main from "@/components/Main/Main";
import { SearchBar } from "@/components/SearchBar";
import { CenterWrapper } from "@/components/CenterWrapper";

type LayoutType = {
  children: JSX.Element
};

export default async function Layout({ children }: LayoutType) {

  return (
    <Wrapper>
      <Container>
        <Main>
          <Navigation />
          <CenterWrapper>
            <SearchBar />
            {children}
          </CenterWrapper>
          <Sidebar />
        </Main>
        <Bar />
      </Container>
    </Wrapper>
  );
}