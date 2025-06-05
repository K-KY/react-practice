import React, {useState} from 'react'
import Number from "./Number";
import Indicator from "./Indicator";
import NumberGen, {generateUniqueRandoms} from "./NumberGen";

const Board = () => {
    const [numbers, setNumbers] = useState([]);
    const renderNumber = (num) => {
        return <Number value={num} onClick={() => click(num)}></Number>
    }

    const click = (num) => {
        if (numbers.includes(num)) {
            return;
        }
        if (numbers.length < 3) {
            const newNumbers = [...numbers, num]
            setNumbers(newNumbers);
        }
        console.log(numbers);
    }

    const reset = () => {
        setNumbers([]);
    }

    return (
        <div>

            <NumberGen num={3}></NumberGen>
            <div>
                <Indicator numbers={numbers}></Indicator>
            </div>
            <div>
                <button onClick={reset}>resetNumbers</button>
            </div>
            <div>
                {renderNumber(1)}
                {renderNumber(2)}
                {renderNumber(3)}
            </div>
            <div>
                {renderNumber(4)}
                {renderNumber(5)}
                {renderNumber(6)}
            </div>
            <div>
                {renderNumber(7)}
                {renderNumber(8)}
                {renderNumber(9)}
            </div>
            <div>
                {renderNumber(0)}
            </div>
        </div>
    )
}
export default Board;