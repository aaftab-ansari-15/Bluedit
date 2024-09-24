import React, { useRef } from "react";
import logo3 from "../assets/logo3.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import searchIcon from "../assets/searchIcon.png";
const Navbar = () => {
  const buttonRef = useRef(null);
  const MouseOver = () => {
    if (buttonRef.current) {
      buttonRef.current.style.background = "grey";
    }
  };
  const MouseOut = (e) => {
    if (buttonRef.current) {
      buttonRef.current.style.background = "initial";
    }
  };
  const handleClick = () => {};
  return (
    <div>
      <div className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid d-flex justify-content-between">
          <div>
            <img
              className="rounded-pill"
              src={logo2}
              alt="logo3"
              width={250}
              height={150}
            />
          </div>

          <div className="d-flex justify-content-center align-items-center">
            <div
              className="rounded-pill bg-primary p-2 d-flex align-items-center"
              style={{ width: "40vw", height: "60%" }}
            >
              <img src={searchIcon} alt="searchIcon" width={30} height={30} />
              <input
                type="text"
                placeholder="search anything here..."
                className="form-control border-0"
                style={{ flex: "0 1 70%", outline: "none" }}
              />
              <button
                className="btn"
                onClick={handleClick}
                style={{ flex: "1 0 %", outline: "none" }}
              >
                Search
              </button>
            </div>
          </div>

          <div>
            <div className="container">
              <button className="btn btn-primary rounded-pill mx-2">
                Log in
              </button>
              <button
                ref={buttonRef}
                onMouseOver={MouseOver}
                onMouseOut={MouseOut}
                className="btn btn-grey rounded-pill mx-2"
              >
                . . .
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
