import { Outlet } from "react-router-dom";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const RootLayout = () => {
  return (
    <div className="min-w-full ">
      <Header />
      <div className="container mx-auto min-h-[calc(100vh_-_12rem)] flex flex-col">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export { RootLayout };
