import React, { FunctionComponent } from "react";

type ContactProps = {
    isActive: boolean;
};

const ContactPage: FunctionComponent<ContactProps> = ({ isActive }) => {
    const isActiveFlag = isActive ? " active " : "";

    return <div>Contakt me now!</div>;
};

export default ContactPage;
