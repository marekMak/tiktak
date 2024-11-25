import { useState, useEffect } from "react";

import "./App.css";

function App() {
  
  const [user, setUser] = useState(1);
  const [winner,setWinner] = useState('');

  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);


  useEffect(() =>{

    checkWin();

  },[board]);

  
  function restartGame() {

    setBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);

    setWinner('');

  }

  function checkWin(){

    const positions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    let squares = [].concat.apply([], board);

    for (let i = 0; i < positions.length; i++) {
      const [a, b, c] = positions[i];   
  

        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            setWinner(user);
        }

      }  
  }


  function selectedItem(i, p){


    //console.log(`i: ${i}, p: ${p}`);

    const tempBoard = [...board];

    if(tempBoard[i][p] == null ){

    let symbol = user === 1  ? 'o' : 'x';

    //tempBoard[i][p] === 'x' ? alert('yes') : alert('no');

    tempBoard[i][p] = symbol;

    setBoard(tempBoard);

    let tempUser = user && ( user === 1  ? 2 : 1 );

    setUser(tempUser);

    }
    else{
      alert('please, select different cell')
      return;
    }
   
  }

  return (
    <div className="game-wrapper">
      <header className={`container ${user === 1 ? 'green' : 'firebrick'}`}>
        player <span>{user}</span> turn
      </header>
      {board.map((row ,i) => (
        <div className="row" key={i}>
          {row.map((item,p )=>(
            <div className={`cell ${user === 1 ? 'green' : 'firebrick'}`} onClick={() => selectedItem(i, p)} key={p}>
              {/* {item && ( user === 1  ? 'x' : 'o' ) } */}
              {item}
            </div>
          ))}
        </div>
        
      ))}
      <button className="restart" onClick={restartGame}>Restart game</button>

      <div className={`final-board ${winner !== '' ? 'winner' : ''} `}>
        <p>We have a winner!</p>
        <p>Player {user} have won the game!</p>
        <button className="restart" onClick={restartGame}>Restart game</button>
      </div>
    </div>
  );
}

export default App;
