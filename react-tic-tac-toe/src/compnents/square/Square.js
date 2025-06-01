import React from "react";
import "./Square.css";

class ClassSquare extends React.Component {


    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         value: props.value
    //     };
    // }

    // handleClick = () => {
    //     this.setState({
    //         value: 'X'
    //     })
    // }

    render() {
        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        )
    }
}

const FunctionSquare = (props) => {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

const FunctionSquare2 = ({onclick, value}) => {
    return (
        <button className="square" onClick={onclick}>{value}</button>
    )
}

export default FunctionSquare;
export {ClassSquare}
