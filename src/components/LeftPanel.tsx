import React, { Component } from "react";
import styled from "styled-components";
import Link from "./Link";

export const LeftPanelStyle = styled.div`
    text-align: left;
    background-color: #424242;
    position: relative;
    width: 20%;
    min-height: 100vh;
    height: 100%;
    float: left;
`;

const StyledLink = styled(Link)`
    display: block;
    color: white;
    width: 80%;
    border: 1px solid #616161;
    margin: 5px;
`;

interface Props {}

interface State {}

class LeftPanel extends Component<Props, State> {
    state = {
        isActive: true,
    };

    render() {
        return (
            <LeftPanelStyle>
                <StyledLink href="/#" className="menu-link">
                    Styled, exciting Link 1
                </StyledLink>
                <StyledLink href="/#" className="menu-link">
                    Styled, exciting Link 2
                </StyledLink>
                <StyledLink href="/#" className="menu-link">
                    Styled, exciting Link 3
                </StyledLink>
                <StyledLink href="/#" className="menu-link">
                    Styled, exciting Link 4
                </StyledLink>
                <StyledLink href="/#" className="menu-link">
                    Styled, exciting Link 5
                </StyledLink>
            </LeftPanelStyle>
        );
    }
}

export default LeftPanel;
