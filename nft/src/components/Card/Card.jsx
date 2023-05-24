import styled from "styled-components";
import ethIcon from 'assets/icons/eth-blue.svg';
import { Button } from "components/Button";

const StyledCard = styled.div`
    padding: 24px;
    background-color: #fff;
    border-radius: 20px;
    color: #747475;
    font-size: 12px;

    .title {
        color: #747475;
        text-align: left;
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        margin-bottom: 12px;
    }
    .content,
    .amount {
        font-size: 24px;
        line-height: 31px;
        color: #27262E;
    }
    .ammount-content-wrapper {
        margin-bottom: 12px;
    }
    .eth {
        margin-right: 4px;
    }
`
export const Card = ({title, amount, content, percent}) => {
    return <StyledCard>
        <div className="title">{title}</div>
        { amount?
            <div className="ammount-content-wrapper">
                <img className='eth' src={ethIcon} alt="eth-icon"></img><span className='amount'>{amount}</span> ETH
            </div>:
            <div className="ammount-content-wrapper">
                <span className="content">{content}</span> %
            </div>
        }
        <Button percent={percent} boderColor="#E9E9E9" textColor="#747475">{percent}%</Button>
    </StyledCard>
}