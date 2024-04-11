import Bar from "@/components/Bar/Bar";
import Container from "@/components/Container/Container";
import Wrapper from "@/components/Wrapper/Wrapper";
import { ReactElement } from "react";

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