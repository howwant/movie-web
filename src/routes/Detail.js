import React from "react";
import { useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

function Detail() {
    const navigation = useNavigate();
    const location = useLocation();
    useEffect(()=> {
        if (location.state === null) {
            navigation("/");
        }
    });
    if (location.state) {
        const { year, title, summary, poster,genres } = location.state;
        return (
            <DetailStyled>
                <img src={poster} alt={title} />
                <div className="movie__data">
                <h3 className="movie__title">{title}
                <span className="movie__year">{year} </span>
                </h3>
                <ul className="genres">
                    {genres.map((genre, index) =>(
                    <li key={index} className="genres__genre">{genre}</li>
                    ))}
                </ul>
                <p className="movie__summary">{summary}</p>
                </div>
            </DetailStyled>
        );
    }
    return <span>해당 영화를 찾을 수 없습니다.</span>;
};
const DetailStyled = styled.div`
    padding: 5%;
    display: flex;
    img {
        border-radius: 2px;
        box-shadow: 2px 2px 2px #666;
    }
    .movie__data {
        padding-left: 50px;
        width: 100%;
        background: #fff;
    }
`;

export default Detail;