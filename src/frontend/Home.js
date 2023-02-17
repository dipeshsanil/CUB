import React from "react";

import ContentSection from "./ContentSection";
import UploadButton from "./UploadButton";

const Home = ({ upload, account }) => {
	return (
		<div style={{ overflowX: "hidden" }}>
			<ContentSection upload={upload} account={account} />
			<UploadButton />
		</div>
	);
};

export default Home;
