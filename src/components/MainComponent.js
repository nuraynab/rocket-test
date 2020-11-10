import React from 'react';
import styled from "styled-components";
import Header from './HeaderComponent';
import Home from './HomeComponent';
import SearchMain from "./SearchMainComponent";
import InfiniteScroll from 'react-infinite-scroll-component';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchImages} from "../redux/ActionCreators";

const mapStateToProps = state => {
    return{
        images: state.images,
        likedImages: state.likedImages,
        searchedImages: state.searchedImages
    }
}

const mapDispatchToProps = dispatch => ({
    fetchImages: () => {dispatch(fetchImages())}
});

class Main extends React.Component {
    // const [images, setImages] = useState([]);
    //
    // useEffect(() =>{
    //     fetchImages();
    // }, [])
    //
    // const fetchImages = (count = 10) =>{
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
    // }

    componentDidMount() {
        this.props.fetchImages();
    };
    render() {
        return(
            <div>
                <Header/>
                <Switch>
                    <Route path='/home' component={() => <Home images={this.props.images}/> }/>
                    <Route path='/search' component={SearchMain}/>
                    <Redirect to='/home' />
                </Switch>
            </div>
        );
    }

      // {/*<div>*/}
      // {/*    <Header/>*/}
      //
      //     {/*<InfiniteScroll next={fetchImages} hasMore={true} loader={<Loader/>} dataLength={images.length}>*/}
      //     {/*    <WrapperImages>*/}
      //     {/*        {images.map(img => (*/}
      //     {/*            <Image url={img.src.original} imgId={img.id}/>*/}
      //     {/*        ))}*/}
      //     {/*    </WrapperImages>*/}
      //     {/*</InfiniteScroll>*/}
      //
      // {/*</div>*/}

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));


const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;