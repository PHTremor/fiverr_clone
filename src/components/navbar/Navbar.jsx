import { React, useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./NavBar.scss";

function Navbar() {
  // pathname used for the submenu
  const { pathname } = useLocation();
  // changes color on scroll
  const [isActive, setActive] = useState(false);

  const runSetActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", runSetActive);

    return () => {
      window.removeEventListener("scroll", runSetActive);
    };
  }, []);
  // changes color on scroll =======================================

  // Opens options
  const [isOptionsOpen, openOptions] = useState(false);

  // USer
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await newRequest.post("/auth/logout");
      localStorage.setItem("currentUser", null);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={isActive || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">fiverr</span>
          </Link>
          <span className="dot">.</span>
        </div>

        {/* links */}
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign In</span>
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {!currentUser && <button className="button">Join</button>}
          {currentUser && (
            <div className="user" onClick={() => openOptions(!isOptionsOpen)}>
              <img src={currentUser.image || "/images/noavatar.jpg"} alt="" />
              <span>{currentUser?.username}</span>
              {isOptionsOpen && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link to="/myGigs" className="link">
                        Gigs
                      </Link>
                      <Link to="/add" className="link">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link to="/orders" className="link">
                    Orders
                  </Link>
                  <Link to="/messages" className="link">
                    Messages
                  </Link>
                  <Link className="link" onClick={handleLogout}>
                    Logout
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(isActive || pathname !== "/") && (
        <>
          {/* sub-menu */}
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="link" to="/">
              Video & Animation
            </Link>
            <Link className="link" to="/">
              Writing & Translation
            </Link>
            <Link className="link" to="/">
              AI Services
            </Link>
            <Link className="link" to="/">
              Digistal marketing
            </Link>
            <Link className="link" to="/">
              Music & Audio
            </Link>
            <Link className="link" to="/">
              Programming & Tech
            </Link>
            <Link className="link" to="/">
              Business
            </Link>
            <Link className="link" to="/">
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

// 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
export default Navbar;
