import { PropsWithChildren } from "react";
import Header from "../Header";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-w-full">
      <Header />
      <div className="container mx-auto min-h-[calc(100vh_-_12rem)] flex flex-col">
        {children}
      </div>
      <footer className="container min-w-full px-6 bg-black flex items-center min-h-24">
        <div className="text-white mx-auto">
          © 2024 Svante Nilsson. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
