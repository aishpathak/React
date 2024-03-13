import { restrautList } from "./constants"
import RestaurantCard from "./RestaurantCard"
import { useEffect, useState } from "react";
import Shimmer from "./ShimmerUi";

/*
    What is sate
    What is Hooks -> functions  

*/
function filterData(searchText,restaurants){
    const filterData = restaurants.filter((restaurant)=>
        restaurant.data.name.includes(searchText));
      console.log('filtered Data',filterData);
    return filterData;
}

const Body = ()=>{

    const [restaurants,setRestaurants] = useState(restrautList);
    const [searchText,setSearchText] = useState(""); // why we use useState().. to create state variable
    // empty array useEffect, it will be called after initial render 
    useEffect(()=>{
      // getRestaurants();
    },[]);// use Effect is a hook, we call it when we want our function to execute on rerender and we pass dependency array .. when we want to execute the array.. that dependency 
    // we pass in array.
    async function getRestaurants() {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
      // Optional Chaining
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
  
    return (restaurants.length !== 0) ? <Shimmer/> : (
    <>
    <div className="search-container">
        <input type="text" className="search-input" 
        placeholder="search" 
        value={searchText}
        onChange={(e)=>
        setSearchText(e.target.value)}/>
        <button className="search-btn" onClick={()=>{
            //need to filter the data
            console.log('Restaurant',restaurants);
            const data = filterData(searchText,restaurants);
            console.log('dataaaaa',data);
            setRestaurants(data);
            //update the data
         } }>Search</button>
    </div>
    <h1>{}</h1>
        <div className="restaurant-list">
      {
        restaurants.map((restraut)=>{
          return <RestaurantCard {...restraut.data} key={restraut.data.id} />
        })
      }
       
    </div>
    </>)
}

export default Body