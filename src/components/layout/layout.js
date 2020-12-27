import React from "react";
import PropTypes from "prop-types";

import SocialLinks from "../socialLinks/SocialLinks";
import Header from "../header/Header";
import Footer from "../footer/Footer";

import "../../styles/config.scss";
import "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <div>
        <aside>
          <SocialLinks />
        </aside>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;