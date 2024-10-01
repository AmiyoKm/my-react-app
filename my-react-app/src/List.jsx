import PropTypes from 'prop-types';

function List(props) {
    
    const fruits = props.fruits;


    const listItems = fruits.map( fruit =><li>{fruit.id}. {fruit.name} : {fruit.calories}</li>)

        
    return (
    <>
    <h2>{props.category}</h2>
    <ul>
        {listItems}
    </ul>

    </> 
            );
        }
List.propTypes = {
    fruits: PropTypes.array,
    category : PropTypes.string
}
export default List;