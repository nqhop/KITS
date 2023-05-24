import styled from "styled-components"
import ethDarkIcon from 'assets/icons/eth-dark.svg';

const StyledNavCard = styled.div`
     color: #fff;
     /* width: 228px; */
     /* height: 220px; */
     /* height: 100%; */
     padding: 16px;
     background: linear-gradient(228.89deg, #5429FF 1.12%, #BBAAFF 100%);
     border-radius: 16px;
`;

export const NavCard = () => {
    return  <StyledNavCard>
            <div className="title">Your Balance</div>
            <div className="amount">
                <p>1,034.02</p>
                <img className="eth" src={ethDarkIcon}></img> ETH
            </div>



        </StyledNavCard>
}