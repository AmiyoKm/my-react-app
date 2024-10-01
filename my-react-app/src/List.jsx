function List() {
    const list=[
        {name:'orange' , calories : 95},
        {name :'mango' , calories : 140},
        {name:'lichee' , calories:45},
        {name:'banana', calories:150}];
    const sortedList = list.sort((a,b)=> a.name.localeCompare(b.name));   
    const newArray=list.map( (fruit) =>    <li>{fruit.name} : {fruit.calories}</li>    ); 


    const sortedCalories = list.sort((a,b)=> a.calories-b.calories);
    const sortedByCalories = sortedCalories.map(fruit=> <li>{fruit.name} : {fruit.calories} </li>)

    const sortedArray=sortedList.map( (fruit) =>    <li>{fruit.name} : {fruit.calories}</li>    );

    const filterCalories = list.filter( fruit =>{ return fruit.calories>100 })
    const filterByCalories = filterCalories.map(fruit=> <li>{fruit.name} : {fruit.calories} </li>)

        
    return (
    <>
    <ul>
        {filterByCalories}
    </ul>  
       <ul>
        {sortedByCalories}
       </ul>
       <ul>
        {newArray}
       </ul>

    </> 
            );
        }
export default List;