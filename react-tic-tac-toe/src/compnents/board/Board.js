import React, {Component, useState} from 'react'
import Square from '../square/Square'
import "./Board.css";

const FunctionBoard = () => {

    console.log("FunctionBoard render")
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setX] = useState(true);
    const nextPlayer = () => {
        if (isXNext) {
            return "X"
        }
        return "O"
    }
    //첫 번째 인수 변수이름, 두 번째 인수 State를 정하는 함수
    const handleClick = (i) => {
        if (winner() != null) {
            return;
        }
        const newSquares = squares.slice();
        if (squares[i] == null) {
            if (isXNext) {
                newSquares[i] = 'X';
            }
            if (!isXNext) {
                newSquares[i] = 'O';
            }
            setX(prev => !prev)
        }
        setSquares(newSquares)
    }

    const winner = () => {
        const endFlags = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let i = 0; i < endFlags.length; i++) {
            const [a, b, c] = endFlags[i];
            if (squares[a] + squares[b] + squares[c] === "XXX") {
                return "X"
            }
            if (squares[a] + squares[b] + squares[c] === "OOO") {
                return "O"
            }
        }
        return null;

    }

    const renderSquare = (i) => {
        return <Square value={squares[i]}
                       onClick={() => handleClick(i)}></Square>
    }
    return (
        <div>
            <div className='status'> Next Player: {nextPlayer()}</div>
            <div className='status'> Winner: {winner()} </div>
            <div className='board-row'>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className='board-row'>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className='board-row'>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    )

}

class ClassBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        }
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares});
    }

    renderSquare(i) {
        return <Square value={this.state.squares[i]}
                       onClick={() => this.handleClick(i)}></Square>
    }

    render() {
        console.log("ClassBoard render")
        return (
            <div>
                <div className='status'> Next Player: X, O</div>
                <div className='board-row'>
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className='board-row'>
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}


export default FunctionBoard;
export {ClassBoard};