import React, { FC } from "react";
import { Home } from "../modules/home";
import { Layout } from "../components/Layout";

const HomePage: FC = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  );
};

export default HomePage;
