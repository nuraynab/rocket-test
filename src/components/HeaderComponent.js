import React, {useState} from 'react';
import styled from 'styled-components';
import logoImg from '../assets/vector.png';
import Search from './SearchComponent';
import History from './HistoryComponent';

const Header = () => {
  const [isSearch, searchIsClicked] = useState(false);
  const [isHistory, historyIsClicked] = useState(false);
  return(
      <Navbar>
        <Logo href='/home'>
            <img src={logoImg} alt="" ></img>
            <span>ImageStock</span>
        </Logo>
        <Menu>
            <MenuLink onClick={() => {searchIsClicked(!isSearch); historyIsClicked(false)}}><i className="fa fa-search"></i><span> Поиск</span></MenuLink>
            <MenuLink><i className="fa fa-heart"></i><span> Избранное </span></MenuLink>
            <MenuLink onClick={() => {historyIsClicked(!isHistory); searchIsClicked(false)}}><i className="fa fa-history"></i><span> История поиска </span></MenuLink>
        </Menu>
        <Search isClicked={isSearch} />
        <History isClicked={isHistory} />
      </Navbar>
  );
}

export default Header;

const Navbar = styled.div`
    background: #000000;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    `;

const Menu = styled.div`
    position: relative;
    margin: 5px 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media(max-width: 768px){
        margin: 5px 0px;
    }
    `;

const MenuLink = styled.a`
    cursor: pointer;
    padding: 10px;
    margin: 5px;
    text-align: center;
    text-decoration: none;
    color: white;
    font-size: 14px;
    @media(max-width: 768px){
        span{
            display:none;
        }
    }
    `;

const Logo = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: white;
    margin: 5px 100px;
    padding: 10px;
    span {
        padding: 10px;
        font-size: 20px;
        font-weight: 600;
        vertical-align: middle;
    }
    @media(max-width: 768px){
        margin: 5px 0px;
        span{
            display:none;
        }
    }
    `;


