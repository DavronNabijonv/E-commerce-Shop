import React from "react";
import './Header.css'
import Head from "./Head";
import Search from "./Search";
import Navber from "./Navbar";

 const Header = () => {
    return (
        <div>
            <Head/>
            <Search/>
            <Navber/>
        </div>
    )
 }
 export default Header;