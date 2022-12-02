import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Board from './components/Board';
import tickets from "./tickets.json";

function App() {
  console.log(tickets);
  return (
    <div className="App container">
      <Board ticket={tickets["tickets"][Math.floor(Math.random() * 60)]} />
    </div>
  );
}

export default App;
