import React from "react";

import ContentSection from "./ContentSection";
import UploadButton from "./UploadButton"

const Home = ({upload}) => {
    return(
        <div style={{overflowX:"hidden"}}>
            <ContentSection upload={upload}/>
            <UploadButton />
        </div>
    );
}

export default Home;