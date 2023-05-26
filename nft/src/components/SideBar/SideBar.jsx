import styled from "styled-components"
import logo from 'assets/icons/logo.svg'
import { NavLink } from "react-router-dom"
import { NavCard } from "components/Card"

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
    /* background-color: #fff; */
    background-color: #ccc;
    min-height: calc(100vh - 64px);
    min-height: 100vh;
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

    .nav-light-mode {

        display: flex;
        justify-content: space-between;

        // toggle-switch
        /* https://codepen.io/alvarotrigo/pen/zYPydpB?editors=1100 */
        --light: #d8dbe0;
        --dark: #28292c;
        --link: rgb(27, 129, 112);
        --link-hover: rgb(24, 94, 82);
        --light-dark: #F0F0F0; 
        .toggle-switch {
            position: relative;
            width: 56px;
        }

        label {
            position: absolute;
            width: 100%;
            height: 30px;
            /* background-color: var(--light-dark); */
            background-color: var(--dark);
            border-radius: 50px;
            cursor: pointer;
        }

        input {
            position: absolute;
            display: none;
        }

        .slider {
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 50px;
            transition: 0.3s;
        }

        input:checked ~ .slider {
            background-color: var(--light);
        }

        .slider::before {
            content: "";
            position: absolute;
            top: 4px;
            left: 4px;
            width: 22px;
            height: 22px;
            border-radius: 50%;
            box-shadow: inset 4px -4px 0px 0px var(--light);
            background-color: var(--dark);
            transition: 0.3s;
        }

        input:checked ~ .slider::before {
            transform: translateX(26px);
            background-color: var(--dark);
            box-shadow: none;
        }
        // end toggle-switch
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
                <NavItem text="Market" path="/Market" icon={marketIcon}/>
                <NavItem text="Active Bids" path="/" icon={activeIcon}/>
                <div className="nav-title">Profile</div>
                <NavItem text="My Portfolio" path="/" icon={protfolioIcon}/>
                <NavItem text="Wallet" path="/" icon={walletIcon}/>
                <NavItem text="Favourites" path="/" icon={favouritesIcon}/>
                <NavItem text="History" path="/" icon={historyIcon}/>
                <NavItem text="Setting" path="/" icon={settingIson}/>
                
                <div className="nav-title">Other</div>
                <div className="nav-light-mode">
                    <NavItem text="Light Mode" path="/" icon={lightModeIcon}/>

                    <div className = 'toggle-switch'>
                        <label>
                            <input type = 'checkbox'/>
                            <span class = 'slider'></span>
                        </label>
                    </div>
                </div>

                <NavCard></NavCard>

            </div>
        </StyledSideBar>
    )
}