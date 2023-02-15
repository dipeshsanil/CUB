import React from "react";
import { ethers } from "ethers";
import "./style.css";
import { useState, useEffect } from "react";
import Card from "./Card";
import noAssets from "./img/no-assets.svg";
import Button from "./Button";

const ContentSection = ({ upload }) => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const loadStorage = async () => {
    console.log(await upload.tokenId());
    const itemCount = await upload.tokenId();

    const filter = upload.filters.stored(null, account);
    const results = await upload.queryFilter(filter);

    let items = [];
    // for (let i = 1; i <= itemCount; i++) {
    // 	// const item = await upload.items(i)

    // 	const uri = await upload.getTokenURI(i);

    // 	//console.log(uri)

    // 	const response = await fetch(uri);
    // 	console.log(response);
    // 	const metadata = await response.json();

    // 	items.push({
    // 		title: metadata.title,
    // 		details: metadata.details,
    // 		image: metadata.image,
    // 	});
    // }

    const purchases = await Promise.all(
      results.map(async (i) => {
        const uri = await upload.getTokenURI(i);

        //console.log(uri)

        const response = await fetch(uri);
        console.log(response);
        const metadata = await response.json();

        items.push({
          title: metadata.title,
          details: metadata.details,
          image: metadata.image,
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
      style={{ padding: "5% 15%" }}
    >
      <div className="container text-center">
        <h2 className="">ALL Files</h2>
        <div className="row ">
          {items.length > 0 ? (
            items.map((item, index) => <Card key={index} item={item} />)
          ) : (
            <main style={{ padding: "1rem 0" }}>
              <div className="col-lg-6 mx-auto py-4">
                <img src={noAssets} alt="" style={{ width: "350px" }} />
              </div>
              <h3>No listed assets</h3>
            </main>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentSection;
