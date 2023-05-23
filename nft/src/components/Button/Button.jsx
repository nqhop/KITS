import styled from "styled-components";
import greenArrow from "assets/icons/green-arrow.svg";
import redArrow from "assets/icons/red-arrow.svg";

const StyleButton = styled.button`
    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px`};
    border: ${props => props.boderColor ? `1px solid ${props.boderColor}` : "none"};
    border-radius: 40px;
    background: ${props => props.bgColor};
    font-weight: 500;
    line-height: 21px;
    color: ${props => props.textColor};
    font-size: ${props => props.fontSize};
    img {
        margin-right: 8px;
    }
`;

export const Button = ({ percent, children, width, height, textColor, bgColor, boderColor, fontSize, ...rest }) => {
    return <StyleButton
        width={width}
        height={height}
        textColor={textColor}
        bgColor={bgColor}
        boderColor={boderColor}
        fontSize={fontSize}
        {...rest}
        >
            {percent && <img src={percent < 0 ? redArrow : greenArrow} alt="" />}
            {children}
    </StyleButton>
}

Button.defaultProps = {
    bgColor: '#FFFFFF',
    textColor: '#5429FF',
    width: 128,
    height: 46,
    fontSize: '16px',
};