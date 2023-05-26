import styled from "styled-components"
import ethDarkIcon from 'assets/icons/eth-dark.svg'

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    img {
        margin-right: 8px;
    }
    .bid {
        font-weight: 700;
        margin-right: 2px;
    }
    .eth {
        color: #747475;
    }
`

export const Eth = ({amount}) => {
    return <StyledDiv>
        <img src={ethDarkIcon} alt="" />
        <div className="bid">{amount}</div>
        <p className="eth">ETH</p>
    </StyledDiv>
}