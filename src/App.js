import { useState } from 'react';
import './App.css';
import data from './data';
import Tours from './component/Tours';

function App() {
const [state , setState] = useState(data)

if(state.length ===0){
  return
    <h1>Loading...</h1>
  
}
const remove =(id)=>{
  const filted= state.filter((items)=>items.id !== id)
  setState(filted)
}

  return (
    <div>
   <Tours state={state}remove={remove}/>
  
    </div>
  );
}

export default App;
