import styled from "styled-components"

const HeaderStyled = styled.div`
    position  : fixed;
    width: 100%;
    height: 56px;
    display: flex;
    background-color: aqua;
    justify-content: space-between;
`;
const Header = () => {
    return (
        <HeaderStyled>
            <div>Search</div>
            <div>Search</div>
            <div><span>noti</span><span>avatar</span></div>  
        </HeaderStyled>
    )
}

export default Header;