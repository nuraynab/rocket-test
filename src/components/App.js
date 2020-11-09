import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import Header from './HeaderComponent';
import Image from './ImageComponent';
import Loader from './LoaderComponent';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';

const App = () => {
    const [images, setImages] = useState([]);

    // useEffect(() => {
    //     const apiRoot = 'https://api.pexels.com';
    //     const apikey = '563492ad6f91700001000001baa918fdd5ac4aa88f68cf6fb2b293cc';
    //     axios
    //         .get(`${apiRoot}/v1/curated?per_page=10`, {
    //             headers: {
    //                 'Authorization' : apikey
    //             }
    //         })
    //         .then(res => setImages([...images, ...res.data.photos]))
    //     console.log(images);
    // }, [])

    useEffect(() =>{
        fetchImages();
    }, [])

    const fetchImages = (count = 10) =>{
        const apiRoot = 'https://api.pexels.com';
        const apikey = '563492ad6f91700001000001baa918fdd5ac4aa88f68cf6fb2b293cc';
        axios
            .get(`${apiRoot}/v1/curated?per_page=10`, {
                headers: {
                    'Authorization' : apikey
                }
            })
            .then(res => setImages([...images, ...res.data.photos]))
        console.log(images);
    }

    return(
      <div>
          <Header/>
          <InfiniteScroll next={fetchImages} hasMore={true} loader={<Loader/>} dataLength={images.length}>
              <WrapperImages>
                  {images.map(img => (
                      <Image url={img.src.original} imgId={img.id}/>
                  ))}
              </WrapperImages>
          </InfiniteScroll>

      </div>
    );
}

export default App;


const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;