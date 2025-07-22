import { useEffect, useState } from "react";

const RestaurantMenu = () =>{

    useEffect(()=>{
            fetchMenu();

    },[])
    const fetchMenu = async () => {

    }

    return(
        <div className="restaurant-menu">
            <h1>Name of the Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
            </div>
    )
}

export default RestaurantMenu;