import React ,{useState} from "react";
function MyComponent(){
     const [car, setCar]= useState({Name: "Honda", Model : "Odyssey" ,Year :2024})

     const handleNameChange =(e) => {
        setCar(c =>({...c,Name:e.target.value}))
     }

     const handleModelChange =(e) => {
        setCar( c =>({...c,Model:e.target.value}))
     }

     const handleYearChange =(e) => {
        setCar(c =>({...c,Year:e.target.value}))
     }

     return <div>
        <input type="text" value={car.Name} onChange={handleNameChange}></input>
        <input type="text" value={car.Model} onChange={handleModelChange}></input>
        <input type="number" value={car.Year} onChange={handleYearChange}></input>
        <p>
        Name  : {car.Name}<br/>
        Model : {car.Model}<br/>
        Year  : {car.Year}</p>


     </div>
}
export default MyComponent;