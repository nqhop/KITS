import React from "react";

export class Counter extends React.Component {
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

    componentWillMount = () => {
        console.log("will mount...");
    }
    componentDidMount = () => {
        console.log("did mount..")
        setTimeout(() => { this.setState({ loading: false }) }, 3000);
    }

    render() {
        console.log("Renderrrr");

        return (
            <div>
                {
                    this.state.loading ?
                        <h2>Loadinggg</h2> :
                        <>
                            <button onClick={() => this.onDecsease()}>-</button>
                            <span>{this.state.count}</span>
                            <button onClick={() => this.onIncsease()}>+</button>
                        </>
                }

            </div>
        )
    }
}