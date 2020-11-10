import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import Image from './ImageComponent';
import Loader from './LoaderComponent';
// import InfiniteScroll from 'react-infinite-scroll-component';
import {fetchImages} from "../redux/ActionCreators";


const Home = (props) => {
    return (
        <div>
            {/*<InfiniteScroll next={fetchImages} hasMore={true} loader={<Loader/>} dataLength={props.images.images.length}>*/}
                <WrapperImages>
                    {props.images.images.map(img => (
                        <Image url={img.src.original} imgId={img.id}/>
                    ))}
                </WrapperImages>
            {/*</InfiniteScroll>*/}

        </div>
    )
}

export default Home;


const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;
