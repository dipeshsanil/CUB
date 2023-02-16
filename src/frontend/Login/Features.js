import React from "react";
import "../style.css";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";
import { SiHiveBlockchain } from "react-icons/si";

import { IconContext } from "react-icons";

const Features = (props) => {
  return (
    <IconContext.Provider value={{ color: "#0047fc", size: "5rem" }}>
      <div id="features" className="container-fluid">
        <div className="row">
          <div className="col-lg-4 feature-box">
            <SiHiveBlockchain />
            <h3 className="py-2">Decentralized</h3>
            <p className="feature-text">
              Data is stored across multiple nodes, making it less susceptible
              to single point of failure.
            </p>
          </div>
          <div className="col-lg-4 feature-box">
            <AiFillLock />
            <h3 className="py-2">Secure</h3>
            <p className="feature-text">
              Employs encryption and other security measures to protect the data
              stored in the network.
            </p>
          </div>
          <div className="col-lg-4 feature-box">
            <AiOutlineThunderbolt />
            <h3 className="py-2">Accessible</h3>
            <p className="feature-text">
              Accessible from anywhere in the world, as long as the user has an
              internet connection
            </p>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};

export default Features;
