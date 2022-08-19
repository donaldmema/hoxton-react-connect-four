import { TableRow } from "./TableRow";

type Props = { body: number[][] };

export function Table({ body }: Props) {
  return (
    <table style={{ width: 650, height: 500 }}>
      <tbody>
        {body.map((row, rowIndex) => (
          <TableRow key={rowIndex} row={row} rowIndex={rowIndex} board={body} />
        ))}
      </tbody>
    </table>
  );
}
