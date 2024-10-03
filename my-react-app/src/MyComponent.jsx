import React , {useState , useEffect} from "react";
import dayjs from "dayjs";
import randomColor from "randomcolor"

function MyComponent(){
    const date= dayjs();
        const [time,setTime]= useState( date.format('hh:mm:ss a'));
        const [color,setColor]= useState(randomColor());

    useEffect(()=>{
       
        setInterval(()=>{
            let newDate =dayjs();
            let newTime = newDate.format('hh:mm:ss a');
            let timeout=setTime(newTime);
            setColor(randomColor());
        },1000)
        
        

    },[]);



        return <div className="container">
        <h1 className='clock' style={{color:color}}>{time}</h1>
        </div>
}
export default MyComponent;