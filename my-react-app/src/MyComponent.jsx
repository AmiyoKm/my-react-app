import React ,{useState} from "react";
import dayjs from "dayjs";
function MyComponent(props) {
    const [task,setTask]= useState(["walking","Sleeping","Eating","Running"]);
    const [newTask,setNewTask]=useState();

    function showingTask(e){
        setNewTask(e.target.value)
    }
    function addTask(){
        
        if(!newTask=="")
        setTask(t=>[...t,newTask]);
        setNewTask('');

       
    }
    function deleteTask(index){
        setTask(t=>t.filter((_,i)=>i!==index));
    }
    function downTask(index){
        if(index){
            const updatedTask = [...task];
        [updatedTask[index],updatedTask[index+1]]=[updatedTask[index+1],updatedTask[index]];
        setTask(updatedTask);
        }
    }
    function upTask(index){
        if(index>0){
            const updatedTask = [...task];
        [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]];
        setTask(updatedTask);
        }
        
    }
    return <>
        <h1>To do list</h1>
        <ol>
           {task.map((t,index) => <li key={index}><span>{t}</span>
           <button onClick={()=>deleteTask(index)}>Delete</button>
           <button onClick={()=>upTask(index)}>up</button>
            <button onClick={()=>downTask(index)}>down</button>

           
           </li>)}
        </ol>
            <input placeholder="enter task" value={newTask} onChange={showingTask}></input>
            <button onClick={()=>addTask()}>Add</button>
            

    </>
}

export default MyComponent;