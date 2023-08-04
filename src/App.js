
import './App.css';
import Counter from './Counter';

function App() {
  // const [count, setCount] =useState(0)
  // function handlePlusClick(){
  //   setCount((c)=> {
      
  //     return c + 1;
  //   });
     
    
  //    setCount(count + 1)
  //   } 
    
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>this count is: {count}</h1>
        <button onClick={handlePlusClick}>+</button> */}
        <Counter />
      </header>
    </div>
  );
}

export default App;
