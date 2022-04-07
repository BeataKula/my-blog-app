import React, { ComponentType } from "react";

type LinkType = {
    href: string;
    className: string;
    children: string;
};

const Link: ComponentType<LinkType> = ({ href, className, children }) => (
    <a href={href} className={className}>
        {children}
    </a>
);

export default Link;
