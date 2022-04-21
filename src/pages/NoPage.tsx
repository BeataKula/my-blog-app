import React, { FunctionComponent } from "react";

type ContactProps = {
    isActive: boolean;
};

const NoPage: FunctionComponent<ContactProps> = ({ isActive }) => {
    const isActiveFlag = isActive ? " active " : "";

    return <div>This page does not exist!</div>;
};

export default NoPage;
