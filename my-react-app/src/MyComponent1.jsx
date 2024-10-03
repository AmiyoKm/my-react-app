import React ,{useState, createContext} from "react";
import MyComponent2 from './MyComponent2.jsx'


export const UserContext = createContext();
function MyComponent1() {
   const [user,setUser]= useState('Amiyo');
    return <>
    <div className="box">
    <p>{`Hi ${user}`}</p>
    <UserContext.Provider value={user}>
    <MyComponent2 />
    </UserContext.Provider>
    </div>
    </>
}

export default MyComponent1;