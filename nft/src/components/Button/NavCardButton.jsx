import styled from "styled-components"
import addIcon from 'assets/icons/add.svg'
import arrowRightIcon from 'assets/icons/arrow-right.svg'

const StyledButton = styled.button`
    width: 100%;
    height: 49px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 12px;
    padding: 14px 16px;
    border: none;
`
export const NavButtonButton = () => {
    return <StyledButton>
        <img src={addIcon} alt="" />
        <p>Top Up Balance</p>
        <img src={arrowRightIcon} alt="" />
    </StyledButton>
}