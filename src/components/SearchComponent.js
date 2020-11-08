import React from 'react';
import styled from 'styled-components'

function Search(props) {
    return(
        <SearchBlock isClicked={props.isClicked} >
            <h2>Поиск</h2>
            <ul>
                <li>Wallpapers</li>
                <li>Textures & Patterns</li>
                <li>Nature</li>
                <li>Current Events</li>
                <li>Architecture</li>
                <li>Business & Work</li>
                <li>Film</li>
                <li>Animals</li>
                <li>Travel</li>
                <li>Fashion</li>
                <li>Food & Drink</li>
                <li>Spirituality</li>
                <li>Experimental</li>
                <li>People</li>
                <li>Health</li>
                <li>Arts & Culture</li>
            </ul>
        </SearchBlock>
    )
}

const SearchBlock = styled.div`
        background: #000000;
        display: ${({ isClicked }) => (isClicked ? "block" : "none")};
        // display: block;
        width: 1300px;
        height: 160px;
        transition: height 0.3s ease-in;
        justify-content: center;
        margin: 35px 100px;
        color: white;
        h2 {

            margin: 10px;
            padding: 15px;
            font-size: 44px;
            font-weight: lighter;
            text-align:center;
            background: linear-gradient(
              to left,
              black 0%,
              grey 30%,
              grey 50%,
              black 100%
            )
            left
            bottom
            no-repeat;
          background-size:100% 1px
        }
        ul{
            margin: 10px;
            list-style-type:none;
            overflow: hidden;
            align-items: center;
            justify-content: center;
//             background: linear-gradient(to right,  #30CFD0 0%, #330867 100%);
//             -webkit-background-clip: text;
//             -webkit-text-fill-color: transparent;
        }

        li{
            margin: 7px;
            float: left;
            display: block;
            text-align: center;
            font-size: 12px;
        }
        @media(max-width: 768px){
            width: 100%;
            height: 100%;
            margin: 35px 0px;
            
            justify-content: center;
            ul{
                margin: 30px 70px;
            }
        }
    `;


export default Search;
