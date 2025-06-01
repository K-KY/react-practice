// import Board from "./compnents/board/Board";
import FunctionBoard from "./compnents/board/Board";
import {ClassBoard} from "./compnents/board/Board";
function App() {
  return (
    <div className="game">
      <h1>GAME</h1>
      <div className="game-board">
        game-board
        <ClassBoard/>
          <FunctionBoard/>
      </div>
      <div className="game-info">
        game-info
      </div>
    </div>
  );
}

export default App;
