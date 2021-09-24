import React, { useState, useEffect } from 'react'

import { calculateWinner } from '../CalculateWinner';
import * as apiClient from "../apiClient";

import Board from './Board';

import './styles.css'

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [players, setPlayers] = useState([{"player_id":1,"name":"player_1","score":0},{"player_id":2,"name":"player_2","score":0}]);
    // const [score, setScores] = useState([{"player_id":1,"name":"player_1","score":0},{"player_id":2,"name":"player_2","score":0}]);
    const loadPlayers = async () => setPlayers(await apiClient.getPlayers());
    const addScore = async (xo) => {
      const winID = xo === 'X' ? players[0].player_id : players[1].player_id;
      const resp = await apiClient.addScore(winID);
      console.log("resp", resp);
      // const updatedScore = players.find(p => winID === p.player_id);
      // setPlayers()
    }

    const winner = calculateWinner(board, addScore); // X, O, or null

    const handleClick = (i) => {
        // create shallow copy of board first / do not mutate original data
        const boardCopy = [...board];

        // 1 If winner is decided or user clicks on pre-occupied box - ignore
        if(winner | boardCopy[i]) return;

        boardCopy[i] = xIsNext ? 'X': 'O';

        setBoard(boardCopy);
        setXIsNext(!xIsNext);
    }

    // initializes once on render automatically, no user interaction
    useEffect(() => {
      // Update the document title using the browser API
      // setPlayers([{"player_id":1,"name":"player_1","score":1},{"player_id":2,"name":"player_2","score":1}]);
      loadPlayers();
    },[]);
  
    return (
        <div >
          <h1 className="header">Tic Tac Toe</h1>
          <section className="score-board">
        <p >{players[0].name}(x) : {players[0].score } </p>
        <p >{players[1].name}(o) : {players[1].score } </p>
        </section>
        <Board squares={board} onClick={handleClick}/>
          <div>
              <p className="winner">{winner ? 'Winner: '+ winner : 'Current Turn:  ' + (xIsNext ? 'X':'O')}</p>
              <Start {...{ setBoard }} />
          </div>
            
        </div>
    );
}

const Start = ({setBoard}) => (   
  <div className="button">
    <button  onClick={() => setBoard(Array(9).fill(null))}>
        Start Game
    </button>
  </div> 
)

export default Game;
