import './App.css';
import React ,{useState} from "react";
function App() {


const[count,setcount] = useState(0)

  return (
    <div className="App">
       <header>
         <h1>Counter App using State</h1>
       </header>
       <h2>Current value of Counter is {count}</h2>
       <button onClick={()=>setcount(0)}>Reset</button>
       <button onClick={()=>setcount(count+1)}>Increase</button>
       <button onClick={()=>setcount(count-1)}>Decrease</button>
    </div>
  );
}

export default App;
