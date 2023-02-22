import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import { Outlet, useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import altImg from "./img/file_alt.jpg";

const Preview = ({ upload }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const item = location.state;

	useEffect(() => {
		// onImageChange(item.image);
	}, []);

	return (
		<div id="details" className="container">
			<img
				onError={(e) => {
					e.target.src = altImg;
				}}
				src={item.image}
				style={{ width: "100%", borderRadius: "25px" }}
				alt="Preview not available"
			/>
			<p>{item.fileName}</p>
			<p>{item.size}</p>
			<p>{item.type}</p>
		</div>
	);
};
//TODO:
export default Preview;
