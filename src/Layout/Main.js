import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <Fragment>
      <header>
        <h1>This is the header</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <h2>This is the footer</h2>
      </footer>
    </Fragment>
  );
};

export default Main;
