import React from "react";
import { Outlet, Link } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <h1>Layout</h1>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <Link to={"about"}>
        <button>About</button>
      </Link>
      <Outlet />
    </div>
  );
};

export default Index;
