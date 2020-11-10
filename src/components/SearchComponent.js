import React from 'react';
import styled from 'styled-components'

function Search(props) {
    console.log(props.isClicked);

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            console.log('do validate');
        }
    }

    return(
        <SearchBlock isClicked={props.isClicked} >
            <SearchInput placeholder="Поиск" placeholderTextColor="white" onKeyDown={handleKeyDown}/>
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

const SearchInput = styled.input`
    width: 100%;
    color: white;
    margin: 10px;
    padding: 15px;
    font-size: 44px;
    font-weight: lighter;
    text-align:center;
    background: #000000;
    border-left: none; 
    border-right: none; 
    border-top: none;
    border-bottom: 1px solid;
    border-image: linear-gradient(to right, black, grey, grey, black ) 47% 0%;   
    background-size:100% 1px
`;


export default Search;
