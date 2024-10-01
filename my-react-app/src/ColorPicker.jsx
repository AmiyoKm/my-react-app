import React ,{useState} from "react";
function ColorPicker(){
    const [color, setColor]=useState('#FFFFFF');

    const handleColorChange = (e) => {
        setColor(e.target.value);
    }
    return <div className="color-picker-container">

        <h1> Color Picker</h1>
    
        <div className="color-display" style={{backgroundColor:color}}>
        </div>
            <p>Choose a color</p>
            <input type="color" value={color} onChange={handleColorChange} />
            <p>Color: {color}</p>
        
    </div>
}
export default ColorPicker;