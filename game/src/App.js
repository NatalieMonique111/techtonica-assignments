import React from "react";
import "./App.css";
import Board from "./components/Board";
// import Cell from "./components/Cell";

function App() {
  return (
    <div className="App">
      <h1>Minesweeper</h1>
      <Board />
    </div>
  );
}

export default App;