import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import SidebarLeft from "./components/SidebarLeft";
import SidebarRight from "./components/SidebarRight";

const App = () => {
  return (
    <>
      <div class="container-fluid p-0">
        <Navbar />
        <div class="row">
          <div
            class="col-3"
            style={{
              borderRight: "2px solid gray",
              borderRadius: "5px",
              backgroundColor: "orange",
              height: "81vh",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <SidebarLeft />
          </div>
          <div class="col-7">
            <HomePage />
          </div>
          <div
            class="col-2"
            style={{
              borderLeft: "2px solid gray",
              borderRadius: "5px",
              backgroundColor: "orange",
              height: "81vh",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <SidebarRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
