import { PropsWithChildren } from "react";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-w-full">
      <Header />
      <div className="container mx-auto min-h-[calc(100vh_-_12rem)] flex flex-col">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
