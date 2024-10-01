import React ,{useState} from "react";
function MyComponent(){
    const [name , setName]=useState("Guest");
    const [quantity,setQuantity] = useState(1);
    const [comment,setComment]= useState('');
    const [payment , setPayment]=useState('');
    const [shipping , setShipping]= useState('Delivery');

   const handleNameChange= (e) =>{
    setName(e.target.value);
   }

   const handleQuantityChange= (e) =>{
    setQuantity(e.target.value);
   }
   const handleCommentChange =(e)=>{
    setComment(e.target.value);
   }
  const handleOptionChange =(e)=>{
    setPayment(e.target.value);
  }
  const handleShippingChange=(e)=>{
    setShipping(e.target.value);
  }

    return<div>
        <input value={name} onChange={handleNameChange}></input>
        <p>name :{name}</p>

        <input type="number" value={quantity} onChange={handleQuantityChange}></input>
        <p>quantity :{quantity}</p>
        <textarea value={comment} onChange={handleCommentChange} />
        <p>Comment : {comment}</p>
        <select value={payment} onChange={handleOptionChange}>
            <option value ="">Select an payment Option</option>
            <option value ="VISA">VISA</option>
            <option value ="MASTERCARD">MASTERCARD</option>
            <option value ="GIFT CARD">GIFT CARD</option>
        </select>
        <p>Payment in {payment || "Not selected yet"}</p>

        <label><input type="radio" value="Pick up" checked={shipping==="Pick up"} onChange={handleShippingChange} />Pick up</label><br/>
        <label><input type="radio" value="Delivery" checked={shipping==="Delivery"} onChange={handleShippingChange} />Delivery</label>
        <p>Shipping Method: {shipping}</p>
    </div>
}
export default MyComponent;