
import React, { useEffect, useState } from "react";
import createBoard from "../util/createBoard";
import Cell from "../components/Cell.js";



const Board = () => {
  const [grid, setGrid] = useState([]);
  useEffect(() => {
    function freshBoard() {
      const newBoard = createBoard(5, 5, 10);
      setGrid(newBoard);
    }
    freshBoard();
  }, []);

  const updateFlag = (e) => {
    e.preventDefault();
    console.log("Right Click")
  }

  if (!grid.board) {
    return <div>Loading</div>
  }

  return grid.board.map((singleRow) => {
    return (
      <div style={{ display: "flex" }}>
        {singleRow.map((singleBlock) => {
          return <Cell details={singleBlock} updateFlag={updateFlag} />;
        })}
      </div>
    );
  });
};
export default Board;