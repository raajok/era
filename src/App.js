import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [number, setNumber] = useState(0);
  const plusOne = () => {
    setNumber(prevnumber => prevnumber + 1);
  }
  const minusOne = () => {
    setNumber(prevnumber => prevnumber - 1);
  }
  
  return (
    <>
    <div className="container">
      <div className="countNumber">
        {number}
      </div>
      <div className="nappulat">
        <button className="Nappula" onClick={minusOne}></button>
        <button className="Nappula" onClick={plusOne}></button>
      </div>
    </div>
    </>
  );
}

export default App;
