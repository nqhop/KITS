import styled from "styled-components"
import logo from 'assets/icons/logo.svg'
import { NavLink } from "react-router-dom"

import marketIcon from 'assets/icons/shop.svg'
import dashBoardIcon from 'assets/icons/dashboard.svg'
import activeIcon from 'assets/icons/active-bids.svg'
import protfolioIcon from 'assets/icons/portfolio.svg'
import walletIcon from 'assets/icons/wallet.svg'
import favouritesIcon from 'assets/icons/favourites.svg'
import historyIcon from 'assets/icons/history.svg'
import settingIson from 'assets/icons/settings.svg'
import lightModeIcon from 'assets/icons/light-mode.svg' 

const StyledSideBar = styled.div`
    background-color: #fff;
    height: 100vh;
    padding: 32px;
    .logo {
        display: flex;
        gap: 16px;
        margin-bottom: 54px;
    }
    .logo-text {
        font-weight: 700;
        font-size: 28px;
        color: #27262E;
        line-height: 36px;
    }
    .logo-desc {
        font-size: 10px;
        color: #7A797D;
        line-height: 13px;
    }
    .nav-title{
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 12px;
        line-height: 16px;
        color: #27262E;
        letter-spacing: 0.14em;
        text-transform: uppercase;

        margin-top: 40px;
        margin-bottom: 20px;
    }
`;

const StyledNavItem = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 25px;
    a {
        text-decoration: unset;
        color: #7A797D;
    }
`
const NavItem = ({text, path, icon}) => {
    return (
        <StyledNavItem>
            <img src={icon}></img>
            <NavLink to={path}>{text}</NavLink>
        </StyledNavItem>
    )
}
export const SideBar = () => {
    return (
        <StyledSideBar>
            <div className="logo">
                <img src={logo} alt="logo"/>
                <div>
                    <div className="logo-text">MyNFT</div>
                    <div className="logo-desc">NFT Marketplace</div>
                </div>
            </div>
            <div className="nav">
                <NavItem text="home" path="/" icon={dashBoardIcon}/>
                <NavItem text="Market" path="/" icon={marketIcon}/>
                <NavItem text="Active Bids" path="/" icon={activeIcon}/>
                <div className="nav-title">Profile</div>
                <NavItem text="My Portfolio" path="/" icon={protfolioIcon}/>
                <NavItem text="Wallet" path="/" icon={walletIcon}/>
                <NavItem text="Favourites" path="/" icon={favouritesIcon}/>
                <NavItem text="History" path="/" icon={historyIcon}/>
                <NavItem text="Setting" path="/" icon={settingIson}/>
                <div className="nav-title">Other</div>
                <NavItem text="Light Mode" path="/" icon={lightModeIcon}/>
            </div>
        </StyledSideBar>
    )
}