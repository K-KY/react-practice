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
        console.log(userNumbers);
    }

    const reset = () => {
        setUserNumbers([]);
    }

    const generateNumber = () => {
        const newNumbers = generateUniqueRandoms(3);
        setNumbers(newNumbers);
    };

    const compare = (numbers, userNumbers) => {
        console.log(numbers);
        console.log(userNumbers);
        let ball = 0;
        let strike = 0;
        if (numbers.length < 3 || userNumbers.length < 3) {
            return;
        }

        for (let i = 0; i < userNumbers.length; i++) {
            if (userNumbers[i] === numbers[i]) {
                strike++;
                continue;
            }
            if (numbers.includes(userNumbers[i])) {
                ball++;
            }
        }
        console.log(ball);
        console.log(strike);

        return ball + " 볼 " + strike + " 스트라이크";
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

                <Indicator numbers={userNumbers}></Indicator>
                {/*<div>*/}
                {/*    {userNumbers.map((num, idx) => (*/}
                {/*        <strong key={idx}>{num} </strong>*/}
                {/*    ))}*/}
                {/*</div>*/}
            </div>

            <div>점수 : {compare(numbers, userNumbers)}</div>

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
            <button onClick={() => compare(numbers, userNumbers)}>제출</button>
        </div>
    )
}
export default Board;