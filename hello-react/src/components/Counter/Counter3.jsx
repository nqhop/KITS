import React from "react";
import styled from "styled-components";

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: #BF4F74;
    `;

const StyleTitle = styled(Title)`
    color: yellow;    
`;

const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
    .count-number {
        color: ${(props) => props.count > 5 ? "blue" : "pink"};
    }
    `;

export class Counter3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0, loading: true };
    }
    onDecsease = () => {
        this.setState({ count: this.state.count - 1 });
    }

    onIncsease = () => {
        this.setState({ count: this.state.count + 1 });
    }

    shouldComponentUpdate(nextState) {
        if(nextState.count > 5) {
            return false;
        }
        return true;
    }
    render() {
        console.log("Renderrrr");

        return (
              
            <Wrapper count={this.state.count}>
                <Title>Hello </Title>
                <StyleTitle>Hi</StyleTitle>
                <button className="counter-button" onClick={() => this.onDecsease()}>-</button>
                <span className="count-number">{this.state.count}</span>
                <button className="counter-button" onClick={() => this.onIncsease()}>+</button>
            </Wrapper>

        )
    }
}