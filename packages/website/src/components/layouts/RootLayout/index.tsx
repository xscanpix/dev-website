import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PropsWithChildren } from "react";

interface RootLayoutProps extends PropsWithChildren {}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="min-w-full bg-background">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export { RootLayout };
