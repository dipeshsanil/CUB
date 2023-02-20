import React from "react";
import * as IPFS from "ipfs-core";
import { useState, useEffect } from "react";
import { Web3Storage, getFilesFromPath } from "web3.storage";
import { uuid } from "uuidv4";
import { ethers } from "ethers";
import "./style.css";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "./Button";
import { create } from "ipfs-http-client";
// const auth = 'Basic ' + Buffer.from(process.env.PROJECT_ID  + ':' + process.env.PROJECT_SECRET).toString('base64');
// const ipfs = await IPFS.create()
// var ipfs;

//  const start = async () => {
// 	try{
// 		ipfs = await IPFS.create( );
// 	} catch(e) {
// 		console.error(e);
// 	}
// }

const token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweEFDMzI2NzQ2ZTYyZTZGMTc1ODMyNmRiNDI1N0I1YzRCREE5Y2JFN0UiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzY0Njc1NTI2MTAsIm5hbWUiOiJDVUIifQ.bBTAXUy6zf6I7exvpm8af3ONvwRqNI0ZrWeo7ZovC_g";
const client = new Web3Storage({ token });

//const client = create("http://127.0.0.1:5001/api/v0");

const Upload = ({ upload }) => {
	const navigate = useNavigate();
	console.log(upload);
	const [image, setImage] = useState("");
	const [title, setTitle] = useState("");
	const [file, setFile] = useState("");
	const [cid, setCid] = useState("");
	const [fileName, setFileName] = useState("");
	// const [url, setUrl] = useState("");
	// const [details, setDetails] = useState("");

	//Uploads the file to ipfs
	const send = async (event) => {
		event.preventDefault();
		const file = event.target.files[0];
		console.log(file);
		if (typeof file !== "undefined") {
			try {
				//const result = await client.add(file);
				// await start();
				// const { cid } = await ipfs.add(file)
				// console.log(cid);
				//const files = await getFilesFromPath(file.webkitRelativePath)
				// const ext = file.name.split('.').pop();
				// const fileName = `${uuid()}.${ext}`;
				// const newFile = new File([file], fileName, {type: file.type});
				const cid = await client.put([file], {
					name: file.name,
				});
				setCid(cid);
				setFileName(file.name);
				console.log(cid);
				console.log(file.name);
				setImage(`https://${cid}.ipfs.dweb.link/${file.name}`);
			} catch (error) {
				console.log("ipfs image upload error: ", error);
			}
		}
	};
	// const create = async (event) => {
	// 	event.preventDefault();
	// 	// if (!image || !title || !details) return;
	// 	if (!image) return;
	// 	try {
	// 		// const result = await ipfs.add(
	// 		// 	// JSON.stringify({ image, title, details })
	// 		// 	JSON.stringify({ image, title})
	// 		// );
	// 		const { cid } = await ipfs.add(
	// 			// JSON.stringify({ image, title, details })
	// 			JSON.stringify({ image, title})
	// 		);
	// 		console.log(cid);
	// 		await uploaddetails(cid);
	// 	} catch (error) {
	// 		console.log("ipfs uri upload error: ", error);
	// 	}
	// };

	// const uploaddetails = async (result) => {
	// 	console.log(result);
	// 	const uri = `https://ipfs.io/ipfs/${result}`;
	// 	await (await upload.uploadImage(uri)).wait();
	// 	console.log(await upload.tokenId());
	// };

	const uploaddetails = async (event) => {
		event.preventDefault();
		console.log(image);
		await (await upload.uploadImage(image)).wait();
		console.log(await upload.tokenId());
	};

	const onClick = (event) => {
		uploaddetails(event)
			.then((result) => {
				// console.log(url);
				const url = "/files/" + cid + "/" + fileName;
				console.log(url);
				navigate(url);
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	return (
		<div className="container" id="details">
			<h2 className="text-center py-5">Upload File</h2>
			<form>
				<div className="mb-3">
					<label for="title" className="form-label">
						Upload
					</label>
					<input
						onChange={send}
						required
						type="file"
						className="form-control"
						name="file"
						id="title"
					/>
				</div>
				<div className="mb-3">
					<label for="title" className="form-label">
						Share
					</label>
					<input
						onChange={(e) => setTitle(e.target.value)}
						type="text"
						className="form-control"
						id="title"
						value={image}
					/>
				</div>

				{/* <div className="mb-3">
					<label for="exampleInputPassword1" className="form-label">
						Details
					</label>
					<textarea
						onChange={(e) => setDetails(e.target.value)}
						type="text"
						className="form-control"
						rows="6"
					/>
				</div> */}
				{/* <div className="mb-3">
        <label for="title" className="form-label">Price</label>
        <input onChange={(e) => setPrice(e.target.value)} type="number" className="form-control" id="title"/>
        
    </div> */}

				<button type="submit" onClick={onClick} className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Upload;
