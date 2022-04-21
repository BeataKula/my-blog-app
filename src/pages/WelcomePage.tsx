import React, { FunctionComponent } from "react";

type WelcomeProps = {
    isActive: boolean;
};

const WelcomePage: FunctionComponent<WelcomeProps> = ({ isActive }) => {
    const isActiveFlag = isActive ? " active " : "";

    return <div>Welcome!</div>;
};

export default WelcomePage;
