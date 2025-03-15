import RestaurantCard from "./RestaurantCard";




// Restaurant Container Component 
const RestaurantContainer = (props) => {

 const { response } = props;
 return (
    <div className="restaurants-container">
        {
            response.map(data => <RestaurantCard key={data.card.card.info.id} data={data}/>)
        }
    </div>
)
}

export default RestaurantContainer;