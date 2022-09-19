import * as React from "react";
import { Link } from "gatsby";

import Layout from "@components/base/Layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <h1>
        <Link to="/">Go home</Link>.
      </h1>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
