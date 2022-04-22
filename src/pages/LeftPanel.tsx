import { Outlet } from "react-router-dom";
import styled from "styled-components";
import StyledLink from "../components/LinkComponent";

export const LeftPanelStyle = styled.div`
    text-align: left;
    background-color: #424242;
    position: relative;
    width: 20%;
    min-height: 100vh;
    height: 100%;
    float: left;
    position: relative;
    margin-left: 0px;
`;

export const LeftPanelUlStyle = styled.div`
    list-style: none;
`;

const LeftPanel = () => {
    return (
        <LeftPanelStyle>
            <nav className="menu-nav">
                <LeftPanelUlStyle>
                    <li>
                        <StyledLink to="/Welcome" className="menu-link">
                            Welcome
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/AboutMe" className="menu-link">
                            About Me
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/Blog" className="menu-link">
                            Blog
                        </StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/Contact" className="menu-link">
                            Contact
                        </StyledLink>
                    </li>
                </LeftPanelUlStyle>
            </nav>
            <Outlet />
        </LeftPanelStyle>
    );
};

export default LeftPanel;
