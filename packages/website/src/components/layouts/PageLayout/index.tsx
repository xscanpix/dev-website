import { PropsWithChildren } from "react";
import { RootLayout } from "../RootLayout";
import { ContentLayout } from "../ContentLayout";

interface PageLayoutProps extends PropsWithChildren {}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <RootLayout>
      <ContentLayout>{children}</ContentLayout>
    </RootLayout>
  );
};

export { PageLayout };
