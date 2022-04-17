import type { GetStaticProps, NextPage } from "next";

import { Layout } from "../components/layouts";

const HomePage: NextPage = (props) => {
  console.log({ props });

  return (
    <Layout title="Pokemon list">
      <ul>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log("Hola Mundo");

  return {
    props: {
      name: "Karl",
    },
  };
};

export default HomePage;
