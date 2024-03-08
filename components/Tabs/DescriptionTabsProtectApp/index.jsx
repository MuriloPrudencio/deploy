import React from "react";
import {
  Item,
  TextPrimary,
  Text,
  Title,
  Container,
  Security,
  Span,
  ContainerSecurity,
  Paragraph,
  Button,
  TitleApp,
} from "./style";
import Link from "next/link";

const DescriptionTabsProtectApp = () => {
  return (
    <Container>
      <Item>
        <Title>Nosso app é protegido pela</Title>
        <ContainerSecurity>
          <Security src="/images/security-1.png" />
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </Paragraph>

          <TitleApp>
            Faça parte
            <br />
            da maior liga de poker
            <br />
            do mundo
          </TitleApp>
          <Link href="">
            <Button>baixe o app agora</Button>
          </Link>
        </ContainerSecurity>
      </Item>
    </Container>
  );
};

export default DescriptionTabsProtectApp;
