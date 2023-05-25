import styled from "styled-components"
import searchIcon from 'assets/icons/search.svg'
import notiIcon from 'assets/icons/noti.svg'
import avatar from 'assets/images/avatar.svg'

const HeaderStyled = styled.div`
    position  : fixed;
    width: -webkit-fill-available;
    display: flex;
    background-color: aqua;
    justify-content: space-between;
    padding: 32px;
    .search-wrapper {
        position: relative;
        display: flex;
        align-items: center;
        img {
            position: absolute;
            margin-left: 24px;
        }
    }
    .search-input {
        height: 56px;
        border: none;
        width: 461px;
        border-radius: 35px;
        text-indent: 56px;
        outline: none;
        font-size: 16px;
    }
    .user-info {
        display: flex;
        gap: 24px;
    }
    .noti-icon {
        width: 56px;
        height: 56px;
        background-color: #fff;
        border-radius: 50%;
        img {
            padding: 16px;
        }
    }
`;
const Header = () => {
    return (
        <HeaderStyled>
            <div className="search-wrapper">
                <img src={searchIcon} alt="" />
                <input type="text" className="search-input" placeholder="Search Item, Collection and Account.."/>
            </div>
            <div className="user-info">
                <div className="noti-icon"><img src={notiIcon} alt="" /></div>
                <img src={avatar} alt="" />
            </div>
        </HeaderStyled>
    )
}

export default Header;