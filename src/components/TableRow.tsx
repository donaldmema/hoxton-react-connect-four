type Props = { row: number[] };

export function TableRow({ row }: Props) {
  return (
    <tr>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  );
}
