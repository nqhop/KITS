import styled from "styled-components"
import clockIcon from 'assets/icons/clock.svg'

const StyledButton = styled.button`
    height: 28px;
    background: rgba(22, 22, 22, 0.16);
    border-radius: 20px;
    display: flex;
    align-items: center;
    flex-direction: row;
    border: none;
    color: #fff;
    font-size: 12px;
    .img {
        width: 13.33px;
        height: 13.33px;
        margin-right: 4px;
    }
`
export const TimeButton = ({time}) => {
    return <StyledButton>
        <div className="img">
            <img src={clockIcon} alt="" />
        </div>
        <p>{time}</p>
    </StyledButton>
}