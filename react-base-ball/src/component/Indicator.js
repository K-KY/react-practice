const Indicator = ({numbers = []}) => {
    return (
        <div>
            {numbers.map((num, index) => (
                <strong key={index}>{num}</strong>
            ))}
        </div>
    );
};


export default Indicator;