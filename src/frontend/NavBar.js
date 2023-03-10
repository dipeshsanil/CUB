import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { IconContext } from "react-icons";
import { RiShutDownLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { BiCoinStack } from "react-icons/bi";
import { AiOutlineUpload } from "react-icons/ai";



import Button from "./Button";

const NavBar = ({ web3Handler, account, balance }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/");
    navigate(0);
  };


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-light">
        <div className="container">
          <div id="login-redirect" className="">
          <Link to="/" style={{ textDecoration: "none" }}>
            <a  className="navbar-brand" href="#">
            
              CyberLocker
            </a>
          </Link>
          </div>
          <div id="home-redirect" className="remove">
          <Link to="/home" style={{ textDecoration: "none" }}>
            <a  className="navbar-brand" href="#">
            
              CyberLocker
            </a>
          </Link>
          </div>
          
          <div id="icon" className="nav-item dropdown">
            <a
              className="nav-link"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {/* <img
                  src="https://picsum.photos/50"
                  style={{ borderRadius: "50%", width: "50px", height: "50px" }}
                /> */}
              <IconContext.Provider
                value={{
                  color: "#000",
                  size: "2.5rem",
                  className: "user-icon",
                }}
              >
                <div>
                  <AiOutlineUser />
                </div>
              </IconContext.Provider>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
            >
              <li>
                {account ? (
                  <span
                    href={`https://etherscan.io/address/${account}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dropdown-item"
                  >
                    <AiOutlineUser /> Account:{" "}
                    {account.slice(0, 5) + "..." + account.slice(38, 42)}
                  </span>
                ) : (
                  <span onClick={web3Handler} className="dropdown-item">
                    <button
                      className="btn btn-primary"
                      style={{ margin: 0, width: "100%" }}
                    >
                      Connect Wallet
                    </button>
                  </span>
                )}
              </li>
              {/* <li>
              <a className="dropdown-item" href="#">
                  <span>
                    <ImFilesEmpty /> My Files
                  </span>
                </a>
              </li> */}
              <li>
                <a className="dropdown-item" href="#">
                  <span>
                    {" "}
                    <BiCoinStack /> Balance: {balance}
                  </span>
                </a>
              </li>
             
              <li>
                <Link to="/upload" style={{ textDecoration: "none" }}>
                  <a className="dropdown-item" href="#">
                    <span>
                      <AiOutlineUpload /> Upload
                    </span>
                  </a>
                </Link>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" onClick={onClick} href="#">
                  <span>
                    <RiShutDownLine /> Log Out
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
