import React from "react";
import Footer from "./Footer";
import Header from "./Header";

import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Layout = ({ children, description, keywords, author, title }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "87.3vh" }}>
        {children}
        <ToastContainer />
      </main>
      <Footer />
    </div>
  );
};
Layout.defaultProps = {
  title: "IndoZone",
  description: "InoZone is Ecommerce app",
  keywords: "Online Shopping In India",
  author: "@Im_Dp_Raj",
};
export default Layout;
