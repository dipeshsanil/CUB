import React from "react";
import ReactIcon from "./img/icons8-react-96.png";
import Metamask from "./img/icons8-metamask-logo-96.png";
// import BootStrap from "./img/icons8-bootstrap-96.png";
import Solidity from "./img/icons8-solidity-96.png";
import IPFS from "./img/ipfs-logo.png";
import Alchemy from "./img/alchemy-logo.png";
import Web3 from "./img/web3-logo.png";



import "./style.css";

const TechStack = (props) => {
  return (
    <div id="techStack" className="container-fluid">
      <div className="techstack-inner py-5">
        <h2>Technologies Used</h2>
        <div className="row py-5 text-center">
          <div className="col-lg-4 ">
            <img className="tech-logo" src={Metamask} alt="metamask-logo" />
            <p className="mt-2">Metamask</p>
          </div>
          <div className="col-lg-4 ">
            <img className="tech-logo" src={Solidity} alt="solidity-logo" />
            <p className="mt-2">Solidity</p>
          </div>
          <div className="col-lg-4 ">
            <img className="tech-logo" src={ReactIcon} alt="react-logo" />
            <p className="mt-2">React JS</p>
          </div>
          <div className="col-lg-4 ">
            <img className="tech-logo" src={IPFS} alt="bootstrap-logo" />
            <p className="mt-2">IPFS</p>
          </div>
          <div className="col-lg-4 ">
            <img className="tech-logo" src={Alchemy} alt="bootstrap-logo" />
            <p className="mt-2">Alchemy</p>
          </div>
          <div className="col-lg-4 ">
            <img className="tech-logo" src={Web3} alt="bootstrap-logo" />
            <p className="mt-2">Web3 Storage</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
