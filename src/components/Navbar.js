import React, { useRef, useState } from "react";
import logo2 from "../assets/logo2.png";
import searchIcon from "../assets/searchIcon.png";
const Navbar = () => {
  const buttonRef = useRef(null);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const MouseOver = () => {
    if (buttonRef.current) {
      buttonRef.current.style.background = "grey";
    }
  };
  const MouseOut = () => {
    if (buttonRef.current) {
      buttonRef.current.style.background = "initial";
    }
  };
  const handleClick = () => {
    if (!isDropDownOpen) {
      setIsDropDownOpen(true);
    } else {
      setIsDropDownOpen(false);
    }
  };
  const handleItemClick = (item) => {
    console.log(item);
    setIsDropDownOpen(false);
  };
  return (
    <>
      <div style={{ borderBottom: "2px solid #03499e", position: "relative" }}>
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
                  placeholder="search Bluedit..."
                  className="form-control border-0 mx-2"
                  style={{ flex: "0 1 69%", outline: "none" }}
                />
                <button
                  className="btn btn-light rounded-right mx-auto"
                  onClick={handleClick}
                  style={{
                    flex: "0 1 24%",
                    borderRadius: "0 50px 50px 0", // Rounded on the right side only
                    border: "none",
                    cursor: "pointer",
                  }}
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
                  onClick={handleClick}
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
      {isDropDownOpen && (
        <div
          style={{
            border: "1px solid gray",
            borderRadius: "5px",
            position: "absolute",
            backgroundColor: "white",
            width: "200px",
            marginRight: "7px",
            right: 0,
            top: "28%", // Adjust as needed
            transform: "translateY(-50%)", // Center the div vertically
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <div
            onClick={() => handleItemClick("Action 1")}
            style={{ padding: "10px", cursor: "pointer" }}
          >
            Don't have account Register/ Sign Up
          </div>
          <div
            onClick={() => handleItemClick("Action 2")}
            style={{ padding: "10px", cursor: "pointer" }}
          >
            Login
          </div>
          <div
            onClick={() => handleItemClick("Action 3")}
            style={{ padding: "10px", cursor: "pointer" }}
          >
            Help
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
