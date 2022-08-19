import { useState } from "react";
import "./App.css";
import { Table } from "./components/Table";

function App() {
  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ]);

  return (
    <div className="App">
      <Table body={board} />
    </div>
  );
}

export default App;
