import React from "react";
import altImg from "./img/file_alt.jpg";
import { useNavigate } from "react-router-dom";
import { BsFillShareFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { Link, Outlet } from "react-router-dom";

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

	const getFileName = (fileName) => {
		if (fileName.length > 24) {
			const displayFileName =
				fileName.slice(0, 13) + "..." + fileName.slice(-6);
			return displayFileName;
		} else if (fileName.length < 1) {
			return "Unknown File";
		}
		return fileName;
	};

	return (
		<div class="col-lg-3 col-sm-12 gy-4">
			<div class="card shadow" style={{ borderRadius: 20, height: "98%" }}>
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
				<div className="card-body">
					<h5 className="card-title mb-3">{getFileName(item.fileName)}</h5>
					<div className="row ">
						<div className="col-lg-10 col-sm-10">
							<div className="d-grid gap-2">
								<button className="btn btn-primary">
									<a onClick={onClick}>Download</a>
								</button>
							</div>
						</div>
						<div
							className="col-lg-2 col-sm-2 justify-content-end align-self-center pe-3"
							style={{ display: "flex" }}>
							<a onClick={() => gotoShare(item)}>
								<IconContext.Provider
									value={{
										color: "#0047fc",
										size: "1.5rem",
										className: "share-icon",
									}}>
									<BsFillShareFill />
								</IconContext.Provider>
							</a>
						</div>
						<div className="col-lg-12 ">
							<Link to="/preview" state={item}>
								<div className="d-grid gap-2 my-2">
									<div className="btn btn-outline-primary">Preview</div>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
