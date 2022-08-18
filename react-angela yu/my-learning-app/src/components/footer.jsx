import React from "react";

const Footer = () => {
    const date = new Date();

    
    return ( 
        <footer>
        <p>copyright of codesmiles @ {date.getFullYear()}</p>        
        </footer>
     );
}
 
export default Footer;