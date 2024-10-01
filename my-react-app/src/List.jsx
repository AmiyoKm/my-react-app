function List(props) {
    
    const fruits = props.fruits;


    const listItems = fruits.map( fruit =><li> {fruit.name} : {fruit.calories}</li>)

        
    return (
    <>
    <h2>{props.category}</h2>
    <ul>
        {listItems}
    </ul>

    </> 
            );
        }
export default List;