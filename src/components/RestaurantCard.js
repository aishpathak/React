import {IMG_CDN_URL} from "./constants";

// it is taking props data as argument value from body we are sending {...resturant.data} and here we are spreading out
const RestaurantCard = ({name,cuisines,cloudinaryImageId,lastMileTravelString})=>{
    // const {name, cuisines, cloudinaryImageId, lastMileTravelString} = restaurant.data 
      return(
          <div className="card">
              { <img src={
                   IMG_CDN_URL +
                  cloudinaryImageId
              } className="card-img" />  }
              <h2>{name}</h2>
              <h3>{cuisines}</h3>
              <h4>{lastMileTravelString} minutes</h4>
          </div>
      );
  }

  export default RestaurantCard;