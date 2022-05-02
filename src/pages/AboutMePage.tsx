import React, { FunctionComponent } from "react";
import User from "../components/User";

const AboutMePage: FunctionComponent = () => {
    const userId = 1;
    return (
        <div>
            <User key="1" userId={userId} />
        </div>
    );
};

export default AboutMePage;
