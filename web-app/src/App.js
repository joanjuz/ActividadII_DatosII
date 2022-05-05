import { useState } from 'react';
import './App.css';
import {fetchHelloWworld} from './services/HelloWorldService';

function App() {
  const [label, setlabel] = useState("");
  const clickHandler = async () => {
    const result = await fetchHelloWworld();
    setlabel(result);
  };
  return (
    <div className="App">
      <button onClick={()=> clickHandler()}>Call API</button>
      {label}
      </div>
  );
}

export default App;
