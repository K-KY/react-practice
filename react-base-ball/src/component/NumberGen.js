import {useState} from "react";


export const generateUniqueRandoms = (count) => {
    const arr = [];
    while (arr.length < count) {
        const randomNum = Math.floor(Math.random() * 10);
        if (!arr.includes(randomNum)) {
            arr.push(randomNum);
        }
    }
    return arr;
};

const NumberGen = (num) => {
    const [numbers, setNumbers] = useState(generateUniqueRandoms(num));
    const handleClick = () => {
        const newNumbers = generateUniqueRandoms(num.num);
        setNumbers(newNumbers);
    };



    const compare = (userNumber) => {
        console.log(userNumber);
    }


    return (
        <div>
            <button onClick={handleClick}>숫자 생성</button>
            {/*<button onClick={() => compare(userNumber)}>비교</button>*/}
            <div>
                {numbers.map((num, idx) => (
                    <strong key={idx}>{num} </strong>
                ))}
            </div>
        </div>
    );
}


export default NumberGen;