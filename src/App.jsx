import { useDispatch, useSelector } from 'react-redux';
import './App.css';




function App() {
  const cash= useSelector((state)=>state.cash)
  const dispatch = useDispatch()
  console.log(cash);
  const addCash=(cash)=>{
    dispatch({type:"ADD_CASH",payload:cash})
  }
  const getCash=()=>{
    dispatch({type:"GET_CASH",payload:cash})
  }
  return (
    <div className="App">
     <div className='container'>
      <h1>{cash}</h1>
      <div className='buttons'>
        <button onClick={()=>addCash(+prompt())}>Положить деньги</button>
        <button onClick={()=>getCash(+prompt())}>Снять деньги</button>
      </div>
     </div>
    </div>
  );
}

export default App;
