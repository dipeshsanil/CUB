import React from "react";
import altImg from "./img/file_alt.jpg";
import { useNavigate } from "react-router-dom";

import "./style.css";

// import { ethers } from "ethers";
const Card = ({ key, item }) => {
	const navigate = useNavigate();

	const onClick = (event) => {
		event.preventDefault();
		fetch(item.image).then((response) => {
			response.blob().then((blob) => {
				// Creating new object of PDF file
				const fileURL = window.URL.createObjectURL(blob);
				// Setting various property values
				let alink = document.createElement("a");
				alink.href = fileURL;
				const filename = decodeURI(item.image);
				alink.download = filename.substring(filename.lastIndexOf("/") + 1);
				alink.click();
			});
		});
	};
	const decodename = decodeURI(item.image);
	const name = decodename.substring(decodename.lastIndexOf("/") + 1);

	const gotoShare = (item) => {
		const url = "/files/" + item.cid + "/" + item.fileName;
		console.log(url);
		navigate(url);
	};

	return (
		<div class="col-lg-3 col-sm-12 gy-4">
			<div class="card shadow-sm" style={{ borderRadius: 20 }}>
				<div id={key} className="card-image">
					<img
						class="card-img"
						onError={(e) => {
							e.target.src = altImg;
						}}
						style={{
							// borderTopLeftRadius: 20,
							// borderTopRightRadius: 20,
							borderRadius: 20,
						}}
						// src= {item.image}
						// id = {key}
						src={item.image}
						className="card-img-top"
						alt="Preview not available"
					/>
					{/* {onImageChange(item.image, key)} */}
					<div className="image-overlay"></div>
				</div>
				<div class="card-body ">
					{/* <div class="d-flex justify-content-between align-items-center"> */}
					<h5 class="card-title">{item.fileName}</h5>
					<div class="d-grid gap-2">
						<button class="btn btn-primary">
							<a onClick={onClick}>Download</a>
						</button>
						<button class="btn btn-primary">
							<a onClick={() => gotoShare(item)}>Share</a>
						</button>
					</div>
					{/* <p class="card-text text-muted">{item.seller}</p> */}
				</div>
			</div>
		</div>
	);
};

export default Card;
