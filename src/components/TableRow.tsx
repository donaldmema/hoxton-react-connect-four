import { useState } from "react";

type Props = { row: number[]; rowIndex: number; board: number[][] };

export function TableRow({ row, rowIndex, board }: Props) {
  let gamer1 = 1;
  let gamer2 = 2;
  const [currentPlayer, setCurrentPlayer] = useState(0);

  function setPiece(target) {
    let coordinates = target.id.split("-");
    let x = parseInt(coordinates[0]);
    let y = parseInt(coordinates[1]);
    console.log(x, y);

    board[x][y] = currentPlayer;
    console.log(board);

    if (currentPlayer === gamer1) {
      target.classList.add("tile gamer1");
      setCurrentPlayer(gamer2);
    }
  }
  return (
    <tr>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>
          <button
            className={
              "tile" +
              (currentPlayer === 1 ? " gamer1" : "") +
              (currentPlayer === 2 ? " gamer2" : "")
            }
            id={`${rowIndex}-${cellIndex}`}
            onClick={(event) => setPiece(event.target)}
          ></button>
        </td>
      ))}
    </tr>
  );
}
