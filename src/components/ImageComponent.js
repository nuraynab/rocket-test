import React from 'react';
import styled from "styled-components";
const Image = ({url, imgId}) => {
    return (
        <Img src={url} key={imgId} alt=""/>
    )
}

export default Image;

const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;