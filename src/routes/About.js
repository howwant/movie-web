import React from "react";
import styled from "styled-components";

function About () {
    return <AboutStyled>
        <p>안녕하세요!</p>
        <p className="intro"><span className="Logo">WatchMoive</span>를 통해 영화를 추천받고,<br />
        재미있는 영화를 감상하세요!</p>
    </AboutStyled>;
};
const AboutStyled = styled.div`
    margin: 5%;
    padding: 4%;
    background: #fff;
    .Logo {
        font-weight: bold;
    }
    .intro {
        line-height: 1.3;
    }
`;
export default About;