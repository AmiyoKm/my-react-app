import React ,{useState, useContext} from "react";
import { UserContext } from "./MyComponent1.jsx";



function MyComponent4() {

    const user = useContext(UserContext);
    return <>

    <div className="box">
    <p>{`Hi ${user}`}</p>
    
    </div>
    </>
}

export default MyComponent4;