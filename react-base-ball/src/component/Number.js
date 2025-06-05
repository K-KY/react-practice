

const Number = (props) => {
    return (
        <button className="Number" onClick={props.onClick}>
            {props.value}
        </button>
    )
}

export default Number