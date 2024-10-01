import React ,{useState} from 'react';
function MyComponent(){
    const [name ,setName]= useState("Unknown");
    const [age , setAge]= useState(0);
    const [ isEmployed , setIsEmployed]= useState(false);
    const updateName =() =>{
        setName("Amiyo Kumar");
    }
    const updateAge = ()=> {
        setAge(age+1);
    }
    const updateEmployment =() =>{
        setIsEmployed(!isEmployed);
    }
    return <div>
        <p>name : {name}</p>
        <button onClick={updateName}>Set Name</button>
        <p>age: {age}</p>
        <button onClick={updateAge}>Increase age</button>
        <p>Employment status: { isEmployed ? "has Job":"doesn't have job"}</p>
        <button onClick={updateEmployment}>Change Status</button>
    </div>
}
export default MyComponent;