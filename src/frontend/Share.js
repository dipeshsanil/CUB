import React from "react";
import Card from "./Card";
import { useNavigate, useParams } from "react-router-dom";
import altImg from "./img/file_alt.jpg";

import "./style.css";

const Share = () => {
	const navigate = useNavigate();
	const params = useParams();
	const url = "https://" + params.cid + ".ipfs.dweb.link/" + params.filename;
	const domain = "https://cublc-76452.web.app/files/";
	const shareUrl = domain + params.cid + "/" + params.filename;

	const item = {
		image: url,
	};

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

	const CopyText = () => {
		// Get the text field
		var copyText = document.getElementById("myInput");

		// Select the text field
		copyText.select();
		copyText.setSelectionRange(0, 99999); // For mobile devices

		// Copy the text inside the text field
		navigator.clipboard.writeText(copyText.value);

		// Alert the copied text
		alert("Copied the text: " + copyText.value);
	};

	console.log(url);
	return (
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
				<div className="col-lg-6 text-center share-content">
					<h2>Share Away!</h2>
					<p>
						Your file is now stored on IPFS. Share the link to
						grant People access.
					</p>
					<input
						className="copytext-label"
						type="text"
						value={window.location.href}
						id="myInput"></input>
					<button className="btn btn-primary mx-3" onClick={CopyText}>
						Copy text
					</button>
					<p className="fw-bold pt-3">OR</p>
					<div className="d-grid gap-2 pb-3">
						<button className="btn btn-primary">
							<a onClick={onClick}>Download</a>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Share;
