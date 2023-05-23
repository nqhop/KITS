import { Component } from "react";

class ClassComponent extends Component {
    componentDidMount() {
        this.setState({myState: 'vietnam'})
    }
    render() {
        const {myProp} = this.props;
        const {myState} = this.state || {};
        return (
            <>
                <div>This is class components</div>
                <div>{myProp}</div>
                <div>{`The state:${myState}`}</div>
            </>
        );
    }
}

export { ClassComponent };