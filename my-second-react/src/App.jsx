import './App.css'
import Count from './count';
import Friends from './friend';
import Team from './Team';
import Users from './user';
import Friends from './friend';

function App() {
   function handleClick(){
    alert('button-clicked');
   }
   const handleClick2 = ( ) => {
      alert('button-2-clicked')
   }
   const handleClick3 = ( ) => {
      alert('button-3-clicked')
   }

   const addToFive = async (num) => {
     alert(num + 5);
   }
  return (
    <>
      <h3>React Core Concept-2</h3>
      <Friends></Friends>

      <Users></Users>

      <Team></Team>
      <Count></Count>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click-2</button>
      <button onClick={handleClick3}>Click-3</button>
      <button onClick={() => addToFive(3)}>Click-4</button>
    </>
  )
}

export default App
