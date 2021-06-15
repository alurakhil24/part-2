import React from "react";
import Appbar from "./Appbar";
import './styles/Layout.css';
function Layout({ children }) {
  return (
    <>
      <Appbar />
      <main id='content'>{children}</main>
    </>
  );
}

export default Layout;
