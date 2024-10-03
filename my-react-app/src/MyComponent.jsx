import React ,{useRef} from "react";




function MyComponent() {
  const refInput1 = useRef(null);
  const refInput2= useRef(null);
  const refInput3 = useRef(null);

    function handleClick1(){
        refInput1.current.focus();
        refInput1.current.style.backgroundColor = "red"
        refInput2.current.style.backgroundColor = ""
        refInput3.current.style.backgroundColor = ""
    }

    function handleClick2(){
        refInput1.current.focus();
        refInput1.current.style.backgroundColor = ""
        refInput2.current.style.backgroundColor = "red"
        refInput3.current.style.backgroundColor = ""
    }
    function handleClick3(){
        refInput1.current.focus();
        refInput1.current.style.backgroundColor = ""
        refInput2.current.style.backgroundColor = ""
        refInput3.current.style.backgroundColor = "red"
    }

  return <>
    <button onClick={handleClick1}>Add ref1</button>
    <input ref={refInput1}/>
    <button onClick={handleClick2}>Add ref2</button>
    <input ref={refInput2}/>
    <button onClick={handleClick3}>Add ref3</button>
    <input ref={refInput3}/>
    
  
  </>
}

export default MyComponent;