import React, { FC } from "react";
import { Home } from "../modules/home";
import { Layout } from "../components/layout";

const HomePage: FC = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default HomePage;
