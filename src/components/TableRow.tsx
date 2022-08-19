import { useState } from "react";

type Props = { row: number[]; board: number[][] };

export function TableRow({ row, board }: Props) {
  let gamer1 = 1;
  let gamer2 = 2;
  const [currentPlayer, setCurrentPlayer] = useState(gamer1);

  function setPiece() {
    let coordinates = this.id.split("-");
    let x = parseInt(coordinates[0]);
    let y = parseInt(coordinates[1]);

    board[x][y] = currentPlayer;

    if (currentPlayer === gamer1) {
      this.className("tile gamer1");
      setCurrentPlayer(gamer2);
    }
  }
  return (
    <tr>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>
          <button
            className="tile"
            id={`${cell}-${cellIndex}`}
            onClick={() => setPiece}
          ></button>
        </td>
      ))}
    </tr>
  );
}
