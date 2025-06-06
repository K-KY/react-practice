import React, {useState} from 'react'
import Number from "./Number";
import Indicator from "./Indicator";
import {generateUniqueRandoms} from "./NumberGen";

const Board = () => {
    const [userNumbers, setUserNumbers] = useState([]);
    const [numbers, setNumbers] = useState([]);
    const renderNumber = (num) => {
        return <Number value={num} onClick={() => click(num)}></Number>
    }

    const click = (num) => {
        if (userNumbers.includes(num)) {
            return;
        }
        if (userNumbers.length < 3) {
            const newNumbers = [...userNumbers, num]
            setUserNumbers(newNumbers);
        }
        console.log(numbers);
    }

    const reset = () => {
        setUserNumbers([]);
    }

    const generateNumber = () => {
        const newNumbers = generateUniqueRandoms(3);
        setNumbers(newNumbers);
    };

    const compare = () => {

    }

    return (
        <div>

            {/*생성된 숫자*/}
            <div>
                <Indicator numbers={numbers}></Indicator>
            </div>

            <div>
                <button onClick={generateNumber}>숫자 생성</button>
                {/*<button onClick={() => compare(userNumber)}>비교</button>*/}
                <div>
                    {userNumbers.map((num, idx) => (
                        <strong key={idx}>{num} </strong>
                    ))}
                </div>
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
            <button onClick={compare}>제출</button>
        </div>
    )
}
export default Board;