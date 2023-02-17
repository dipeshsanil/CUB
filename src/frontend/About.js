import React from "react";

import "./style.css";

const About = (props) => {
  return (
    <div className="container-fluid" id="about">
      <h2>About CyberLocker</h2>
      <p className="about-text">
        CyberLocker is basically an application which helps users to upload
        their sensitive files on the internet in a secure manner. The Project
        also shows the use of new emerging technologies like Web3, IPFS, etherjs
        and web3 development platforms like Alchemy can be seen. The proposed
        architecture explains very well the flow of the application right from
        logging into the application using Metamask to deploying smart contracts
        into the Blockchain and using the deployed smart contracts to upload the
        sensitive data/files like Text files, Images, Pdf’s. Thus it can be
        clearly seen how blockchain can be used to create a secure way of
        storage of sensitive files with no disparities because of a
        decentralized network.
      </p>
    </div>
  );
};

export default About;
