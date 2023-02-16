import React from "react";

import "./style.css";

const Button = (props) => {
        return(
            <div>
                <button className="btn btn-outline-light btn-lg" onClick={props.onClick} style={{width:props.width,fontWeight:props.fontWeight}}>{props.name}</button>
            </div>
        );
}

export default Button;