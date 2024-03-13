import { useState } from "react";
import logo from "../assets/food_villa.png";
import {Link} from "react-router-dom";

const Title = () =>(
    <a href="/">
    <img alt="logo" className="logo" 
    src={logo} />
    </a>
);  

const Header =() =>{
    const [title1,setTitle1] = useState("Food Villa");
    return (
    <div className="header">
         <Title></Title>
    <h1>{title1}</h1>
    <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <Link to="/about">
                    <li>About</li> 
                    </Link>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}
export default Header