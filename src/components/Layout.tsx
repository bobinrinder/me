import React from "react";
import TopNavigation from "./TopNavigation";

import "bootstrap/dist/css/bootstrap.css";
import "./layout.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

const Layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <>
      <TopNavigation />
      <main>{children}</main>
    </>
  );
};

export default Layout;
