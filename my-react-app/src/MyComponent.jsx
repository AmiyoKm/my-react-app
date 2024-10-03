import React ,{useState}from "react";
function MyComponent(){
   
    const [fruits , setFruits]=useState(["banana","Apple"]);

    function handleFruitAdd(){
     const added = document.getElementById("getInput").value;
        document.getElementById("getInput").value="";
        setFruits(f=>[...f, added]);
    }
    function handleFruitRemove(index){
            setFruits(fruits.filter((element,i)=>i !==index));
    }

    return <div>
        <h1>List of Fruits</h1>
        <ul>
            {fruits.map( (fruit,index)=>
            <li key={index} onClick={()=>handleFruitRemove(index)}>{fruit}</li>)}
        </ul>
        <input type="text" id="getInput"></input>
        <button onClick={handleFruitAdd}>Add Fruit</button>
    </div>
}
export default MyComponent;