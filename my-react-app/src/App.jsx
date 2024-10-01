import List from './List.jsx';

function App() {
  const list=[
    {id : 1 ,name:'orange' , calories : 95},
    {id : 2 ,name :'mango' , calories : 140},
    {id : 3 ,name:'lichee' , calories:45},
    {id : 4 ,name:'banana', calories:150}];


  return (
    <>
     < List fruits={list} category="fruits"/>
    </>
  );
}

export default App;