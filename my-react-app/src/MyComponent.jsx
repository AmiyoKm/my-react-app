import React ,{useState} from "react";
import dayjs from "dayjs";
function MyComponent(props) {
    let dateFrom =  dayjs();
    let year = dateFrom.year();
    const [cars,setCars]=useState([]);
    const [carYear , setCarYear]=useState(year);
    const [carMake,  setCarMake]=useState('');
    const [carModel , setCarModel]= useState('');

    function handleAddCar(){
            let newCar={
                year:carYear,
                make:carMake,
                model:carModel
            }
            setCars(c=>[...c,newCar]);
            setCarYear(year);
            setCarMake('');
            setCarModel('');
    }

    function handleRemoveCar(index){
        setCars(c=>c.filter((element,i)=>  i!==index))
    }

    function handleYearChange(e){
       setCarYear(e.target.value);
    }

    function handleMakeChange(e){
        setCarMake(e.target.value);
    }

    function handleModelChange(e){
        setCarModel(e.target.value);
    }

    return <div>
        <h2>List of Car objects</h2>
        <ul>
            {cars.map((car,index)=>
                <li key={index} onClick={()=>handleRemoveCar(index)}>{car.year} {car.make} {car.model}</li>
            )}
        </ul>

        <input type="number" placeholder="Year" value={carYear}
        onChange={handleYearChange}></input>
        <input type="text" placeholder="Make" value={carMake}
        onChange={handleMakeChange}></input>
        <input type="text" placeholder="Model" value={carModel}
        onChange={handleModelChange}></input>
        <button onClick={handleAddCar}>Add car</button>
    </div>
}

export default MyComponent;