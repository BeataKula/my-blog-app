import React, { FunctionComponent } from "react";

type LinkProps = {
    href: string;
    className: string;
    children: string;
};

const Link: FunctionComponent<LinkProps> = ({ href, className, children }) => (
    <a href={href} className={className}>
        {children}
    </a>
);

export default Link;
