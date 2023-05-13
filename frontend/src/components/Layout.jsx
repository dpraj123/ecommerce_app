import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-dom";
const Layout = ({ children, description, keywords, author, title }) => {
  return (
    <div>
      <Helmet>
        <div>
          <meta charSet="UTF-8" />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
          <title>{title}</title>
        </div>
      </Helmet>
      <Header />
      <main style={{ minHeight: "87.3vh" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
