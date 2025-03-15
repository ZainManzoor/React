import { CDN_URL } from "../../utils/constants";

// Restaurant Card Component
const RestaurantCard = (props) => {
    const {data} = props;

    return (
        <div className="restaurant-card">
            <img src={CDN_URL + data.card.card.info.cloudinaryImageId} alt="Logo" />
            <h3>{data.card.card.info.name}</h3>
            <p>{data.card.card.info.cuisines}</p>
            <button>Order Now</button>
        </div>
    )
}

export default RestaurantCard;