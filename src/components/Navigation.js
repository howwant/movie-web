import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navigation(){
    return <NavStyled>
        <Link to="/movie-web">home</Link>
        <Link to="/about">about</Link>
    </NavStyled>
}
const NavStyled = styled.div`
    padding-left: 5%;
    a {
        display: inline-block;
        text-decoration: none;
        color: #666;
        font-size: 20px;
        padding: 10px;
        font-weight: bold;
        transition: 0.2s;
        &:hover {
            color: #333;
        }
        &:first-child {
            padding-left: 0;
        }
    }
`;
export default Navigation;