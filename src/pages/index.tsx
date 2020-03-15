import React from "react";
import Helmet from "react-helmet";
import { SpinnerContainer } from "../components/spinner";

export default () => (
  <div style={{ height: "100%" }}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>pizzacat83</title>
    </Helmet>
    <SpinnerContainer spinnerConfig={{ size: "30%" }} style={{ height: "100%" }} />
  </div>
);
