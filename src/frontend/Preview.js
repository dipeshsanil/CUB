import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Button from "./Button";
import { Outlet, useNavigate } from "react-router-dom";
import { ethers } from "ethers";

const Preview = ({ upload }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const item = location.state.item;

	useEffect(() => {
		// onImageChange(item.image);
	}, []);

	return (
		<div id="details" className="container">
			<div className="row">
				<div id="raster" className="col-12 col-lg-6"></div>
				<div className="col-12 col-lg-6">
					<div class="d-flex justify-content-between align-items-center">
						<h3>{item.title}</h3>
					</div>
					<div className="py-2">
						<h5>Details</h5>
						<p style={{ textAlign: "justify" }}>{item.details}</p>
					</div>
					<div>
						<button class="btn btn-primary btn-rounded">
							<a href={item.image}>Download</a>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
//TODO:
export default Preview;
