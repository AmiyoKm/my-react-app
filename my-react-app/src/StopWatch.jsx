import React ,{useState , useRef , useEffect}from 'react';
import randomColor from "randomcolor"
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

function StopWatch(){
    dayjs.extend(duration);

    const [isActive ,setIsActive] = useState(false);
    const [time , setTime]= useState(0);
    const [elapsedTime , setElapsedTime]= useState(0);
    const [color,setColor]= useState(randomColor());

    useEffect(()=>{
        let interval = null;
        if(isActive){
            if(time===0){
                setTime(dayjs());
            }
            

            interval= setInterval(()=>{
                setElapsedTime(dayjs().diff(time));
                setColor(randomColor)

            },10)
        }
        else if(!isActive){
            clearInterval(interval);
        }

        return ()=> clearInterval(interval);
    }

    ,[isActive,time]);
    function start(){
        setIsActive(true);
    }
    
    function stop(){
        setIsActive(false);
        
    }
    
    function reset(){
        setIsActive(false);
        setElapsedTime(0);
        setTime(0);
        
    }
    function formatTime(elapsedTime){
        const duration = dayjs.duration(elapsedTime);

        const min = String(duration.minutes()).padStart(2,'0');
        const ss = String(duration.seconds()).padStart(2,'0');
        const ms = String(Math.floor(duration.milliseconds()/10)).padStart(2,'0');

        return `${min}:${ss}:${ms}`
    }

    return <div className="container" style={{backgroundColor:'black'}}>
        <div className="time-display" style={{color:color}}>{formatTime(elapsedTime)}</div>
        <div>
            <button onClick={start} className="start-button">Start</button>
            <button  onClick={stop} className="stop-button">Stop</button>
            <button  onClick={reset} className="reset-button">Reset</button>
        </div>

    </div>
}
export default StopWatch;