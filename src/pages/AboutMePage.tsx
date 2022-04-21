import React, { FunctionComponent } from "react";

type AboutMeProps = {
    isActive: boolean;
};

const AboutMePage: FunctionComponent<AboutMeProps> = ({ isActive }) => {
    const isActiveFlag = isActive ? " active " : "";

    return <div>About Me!</div>;
};

export default AboutMePage;
