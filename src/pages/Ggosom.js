import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const Ggosom = () => {
  return (
    <Layout pageTitle="Ggosom Page">
      <p>πνμ¬νμ΄μ§λ κΌ¬μμ΄ μκ° νμ΄μ§μλλ€.π</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/rd_gs2.jpg"
      />
    </Layout>
  );
};

export default Ggosom;
