import List from './List.jsx';

function App() {
  const list=[
    {name:'orange' , calories : 95},
    {name :'mango' , calories : 140},
    {name:'lichee' , calories:45},
    {name:'banana', calories:150}];


  return (
    <>
     < List fruits={list} category="fruits"/>
    </>
  );
}

export default App;