import Header from "components/Header";
import { SideBar } from "components/SideBar";
import { Link } from "react-router-dom";
const { default: styled } = require("styled-components");

const LayoutStyled = styled.div`
    background-color: green;
    min-height: 100vh;
    .right {
        float: right;
        width: 80%;
        /* width: -webbkit-fill-available; */
    }
    .right::after{
        content: '';
        display: block;
        clear: both;
    }
`;
const ContentStyled = styled.div`
  background-color: pink;
  padding: 32px;
  /* margin-top: 108px; */
  margin-top: 120px;
  /* height: calc(100vh - 120px); */
  /* height: 100vh; */
`;
const SideBarStyled = styled.div`
    float: left;
    width: 20%;
`;
const PrimaryLayout = ({ children }) => {
    return (
        <LayoutStyled>
            <SideBarStyled>
                <SideBar></SideBar>
            </SideBarStyled>
            <div className="right">
                <Header/>
                <ContentStyled>{children}</ContentStyled>
            </div>
        </LayoutStyled>
    );
}

export default PrimaryLayout;