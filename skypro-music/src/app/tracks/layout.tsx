import Bar from "@/components/Bar/Bar";
import Container from "@/components/Container/Container";
import Navigation from "@/components/Navigation/Navigation";
import Sidebar from "@/components/Sidebar/Sidebar";
import Wrapper from "@/components/Wrapper/Wrapper";
import Main from "@/components/Main/Main";
import { SearchBar } from "@/components/SearchBar";
import { CenterWrapper } from "@/components/CenterWrapper";
import { FilterWrapper } from "@/components/FilterWrapper";
import { ReactElement } from "react";

// type LayoutType = {
//   children: JSX.Element
// };

// export default function Layout({children}: LayoutType) {
export default function Layout({
  children,
}: {
  children: ReactElement<any, any>;
}) {
  return (
    <Wrapper>
      <Container>
        {children}
        <Bar />
      </Container>
    </Wrapper>
  );
}