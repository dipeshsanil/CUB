import React from "react";
import Card from "./Card";
import { useNavigate, useParams } from "react-router-dom";

const Share = () => {
	const navigate = useNavigate();
	const params = useParams();
	const url = "https://" + params.cid + ".ipfs.dweb.link/" + params.filename;

	const item = {
		image: url,
	};

	console.log(url);
	return (
		<div>
			<p>{params.cid}</p>
			<p>{params.filename}</p>

			<h4>
				https://{params.cid}.ipfs.dweb.link/{params.filename}
			</h4>
			<Card key="0" item={item}></Card>
		</div>
	);
};

export default Share;
