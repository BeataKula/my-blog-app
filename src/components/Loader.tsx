import React, { FunctionComponent } from "react";

type LoaderProps = {
    isActive: boolean;
};

const Loader: FunctionComponent<LoaderProps> = ({ isActive }) => {
    const isActiveFlag = isActive ? " active " : "";
    const activeDimmerClass = "ui" + isActiveFlag + "inverted dimmer";

    return (
        <div className={activeDimmerClass}>
            <div className="ui massive text loader">
                Just one second We're fetching that content for you.
            </div>
        </div>
    );
};

export default Loader;
