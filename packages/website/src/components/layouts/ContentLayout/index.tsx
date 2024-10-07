import { PropsWithChildren } from "react";
import { Container } from "react-bootstrap";

interface ContentLayoutProps extends PropsWithChildren {}

const ContentLayout = ({ children }: ContentLayoutProps) => {
  return (
    <Container
      className={`py-4 mx-auto min-h-[calc(100vh_-_6rem_-_92px)] flex flex-col`}
    >
      {children}
    </Container>
  );
};

export { ContentLayout };
