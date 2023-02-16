import React from "react";
import { ethers } from "ethers";
import "./style.css";
import { useState, useEffect } from "react";
import Card from "./Card";
import Button from "./Button";


const ContentSection = ({ upload }) => {
	
	    const [loading, setLoading] = useState(true)
	    const [items, setItems] = useState([])

	    const loadStorage = async () => {
	      console.log(await upload.tokenId());
	      const itemCount = await upload.tokenId()

	      let items = []
	      for (let i = 1; i <= itemCount; i++) {
	        // const item = await upload.items(i)

			const uri = await upload.getTokenURI(i);

			//console.log(uri)

			const response = await fetch(uri) 
			const file = await response
			console.log(file.url)


			items.push({
			image: file.url
			})
	      }
	      setLoading(false)
	      setItems(items)
	    }

	    useEffect( () => {
			loadStorage()
	    }, [])



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
