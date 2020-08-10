import React, { FC } from "react";
import { Header } from "../header";
import { Footer } from "../footer";

const Layout: FC = ({ children }) => {
  return (
    <div>
      <Header />
      <>{children}</>
      <Footer />
    </div>
  );
};

export { Layout };
