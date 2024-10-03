import React ,{useState, useContext} from "react";
import MyComponent3 from './MyComponent3.jsx'



function MyComponent2() {
  
    return <>
    <div className="box">
    <p>Hi</p>

    <MyComponent3 />
    
    </div>
    </>
}

export default MyComponent2;