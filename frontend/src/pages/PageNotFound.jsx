import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout>
      <div className="page_not_found">
        <h1>404</h1>
        <h2>Opps ! Page Not Found</h2>
        <div class="btn-group">
          <Link to="/" class="btn btn-primary active">
            Go Back
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
