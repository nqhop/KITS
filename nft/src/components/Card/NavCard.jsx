import styled from "styled-components"
import ethDarkIcon from 'assets/icons/eth-dark.svg';
import { NavButtonButton } from "components/Button";
import ethereumIcon from 'assets/icons/Ethereum.svg'

const StyledNavCard = styled.div`
     color: #fff;
     /* width: 228px; */
     /* height: 220px; */
     /* height: 100%; */
     padding: 16px;
     background: linear-gradient(228.89deg, #5429FF 1.12%, #BBAAFF 100%);
     /* background: url(${ethereumIcon}) no-repeat center / contain; */
     /* background: url(https://) no-repeat center / contain; */
     background: url(${ethereumIcon})  no-repeat 15px 20px / 100px, linear-gradient(228.89deg, #5429FF 1.12%, #BBAAFF 100%);
     border-radius: 16px;
     .amount {
        display: flex;
        flex-direction: column;
        align-items: center;
     }
     .title {
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        margin-bottom: 8px;
     }
     .eth {
        font-weight: 500;
        font-size: 12px;
        margin-bottom: 26px;
        display: flex;
        align-items: center;
        gap: 8px;
     }
     .amount-eth{
        font-weight: 700;
        font-size: 30px;
        line-height: 39px;
        margin-bottom: 18px;
        margin-top: 0px;
     }
`;

export const NavCard = () => {
    return  <StyledNavCard>
            <div className="amount">
            <div className="title">Your Balance</div>
                <p className="amount-eth">1,034.02</p>
                <span className="eth" >
                    <img src={ethDarkIcon}></img> ETH
                </span>
            </div>
            <NavButtonButton />



        </StyledNavCard>
}