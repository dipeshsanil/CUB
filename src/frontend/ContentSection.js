import React from "react";
import { ethers } from "ethers";
import "./style.css";
import { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";

const ContentSection = ({ upload, account }) => {
	console.log(upload);
	const [loading, setLoading] = useState(true);
	const [items, setItems] = useState([]);

	const loadStorage = async () => {
		console.log(await upload.tokenId());
		const itemCount = await upload.tokenId();
		// console.log(itemCount);

		const filter = upload.filters.stored(null, account);
		const results = await upload.queryFilter(filter);
		// console.log(results);

		let items = [];
		// for (let i = 1; i <= itemCount; i++) {
		// 	// const item = await upload.items(i)

		// 	const uri = await upload.getTokenURI(i);

		// 	//console.log(uri)

		// 	const response = await fetch(uri);
		// 	const file = await response;
		// 	console.log(file.url);

		// 	items.push({
		// 		image: file.url,
		// 	});
		// }

		//segrates the data accrding to the users
		const myData = await Promise.all(
			results.map(async (i) => {
				// i stores all the events that is => stored(itemId, owner)
				const item = await i.args;

				console.log(item.itemId.toNumber());
				const uri = await upload.getTokenURI(item.itemId.toNumber());

				//console.log(uri)

				const response = await fetch(uri);
				const file = await response;
				console.log(file.url);

				items.push({
					image: file.url,
				});
			})
		);

		setLoading(false);
		setItems(items);
	};

	useEffect(() => {
		loadStorage();
	}, []);

	return (
		<div
			className="container-fluid"
			id="marketplace"
			style={{ padding: "7% 0" }}>
			<div className="container px-3">
				<h2 className="">ALL Files</h2>
				<div className="row my-5">
					{items.length > 0 ? (
						items.map((item, index) => <Card key={index} item={item} />)
					) : (
						<main style={{ padding: "1rem 0" }}>
							<h2>No listed assets</h2>
						</main>
					)}
				</div>
			</div>
		</div>
	);
};

export default ContentSection;
