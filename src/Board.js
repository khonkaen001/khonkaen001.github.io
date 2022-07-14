import React, { useState, useEffect } from "react";
import Cell from "./Cell";

const Board = (props) => {
  const validate = (board) => {
    let isValid = true;
    for (let i = 0; i < 4; i++) {
      const horizontal = new Set();
      const vertical = new Set();
      const square = new Set();
      for (let j = 0; j < 4; j++) {
        horizontal.add(board[i][j]);
        vertical.add(board[j][i]);
        square.add(
          board[2 * (i % 2) + (j % 2)][
            2 * Math.floor(i / 2) + Math.floor(j / 2)
          ]
        );
      }
      horizontal.delete(0);
      vertical.delete(0);
      square.delete(0);
      if (horizontal.size !== 4 || vertical.size !== 4 || square.size !== 4) {
        isValid = false;
      }
    }
    return isValid;
  };

  const [number, setNumber] = useState(0);
  const [board, setBoard] = useState([]);
  const [loading, setLoading] = useState();
  const [initial, setInitial] = useState([
    [true, true, true, true],
    [true, true, false, false],
    [true, false, true, false],
    [true, false, false, true],
  ]);
  const [statusText, setStatusText] = useState("");
  const [timer, setTimer] = useState(0);

  const submit = () => {
    const isValid = validate(board);
    setStatusText(isValid ? "ถูกต้อง" : "ไม่ถูกต้อง");
  };

  useEffect(() => {
    fetch(
      "https://us-central1-skooldio-courses.cloudfunctions.net/react_01/random"
    )
      .then((res) => {
        return res.json();
      })
      .then((jsonResponse) => {
        setBoard(jsonResponse.board);
        setInitial(
          jsonResponse.board.map((row) => {
            return row.map((item) => {
              return item != 0;
            });
          })
        );
        // console.log(jsonResponse.board)
      });
  }, []);
  // useEffect(() => {
  //   componetDidMount();
  // }, []);

  // const componetDidMount = () => {
  //   let intervalid = setInterval(() => {
  //     console.log("pass");
  //     setTimer((prve) => prve + 1);
  //   }, 1000);
  // };

  // const componetWillUnmount = () => {
  //   clearInterval(this.interval);
  // };
  const restartBoard = () => {
    fetch(
      "https://us-central1-skooldio-courses.cloudfunctions.net/react_01/random"
    )
      .then((res) => {
        return res.json();
      })
      .then((jsonResponse) => {
        setBoard(jsonResponse.board);
        setInitial(
          jsonResponse.board.map((row) => {
            return row.map((item) => {
              return item != 0;
            });
          })
        );
        // console.log(jsonResponse.board)
      });
    setStatusText("");
  };

  return (
    <>
      <div>
        <p className="timer">Elapsed Time :... seconds</p>
        <div className="App">
          <div className="board">
            {board.map((row, i) =>
              row.map((number, j) => {
                return (
                  <Cell
                    key={`cell-${i}-${j}`}
                    isInitial={initial[i][j]}
                    number={number}
                    onchange={(newNumber) => {
                      board[i][j] = newNumber;
                      setNumber({ board: newNumber });
                    }}
                  />
                );
              })
            )}
          </div>
          <div className={{ textAlign: "center" }}>
            <button className="restart-button" onClick={restartBoard}>
              Reset
            </button>

            <button onClick={submit}>Submit</button>

            <p>{statusText}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
