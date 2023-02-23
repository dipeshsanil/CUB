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
		<>
			<div id="share" className="container-fluid">
				<div class="row">
					<div className="col-lg-6">
						<img
							onError={(e) => {
								e.target.src = altImg;
							}}
							src={item.image}
							style={{ width: "100%", borderRadius: "25px" }}
							alt="Preview not available"
						/>
					</div>
					<div className="col-lg-6 share-content">
						<h2 className="mb-2">Details</h2>
						{/* <p>
              <span className="fw-bold">Name: </span>
              {item.fileName}
            </p>
            <p>
              <span className="fw-bold">Size: </span>
              {item.size}
            </p>
            <p>
              <span className="fw-bold">File Type:</span>
              {item.type}
            </p> */}
						<table class="table table-borderless">
							<tbody>
								<tr>
									<td>
										<span className="fw-bold">Name: </span>
									</td>
									<td>{item.fileName}</td>
								</tr>
								<tr>
									<td>
										<span className="fw-bold">Size: </span>
									</td>
									<td>{item.size}</td>
								</tr>
								<tr>
									<td>
										<span className="fw-bold">File Type: </span>
									</td>
									<td>{item.type}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
};
//TODO:
export default Preview;
