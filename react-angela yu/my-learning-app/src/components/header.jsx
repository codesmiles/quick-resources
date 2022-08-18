import React from "react";

const Header = () => {
    const header ={
        backgroundColor:"#f5ba13",
        padding:"16px 32px",
        margin:"auto -16px",
        boxShadow:"0 0 13px 0 rgba(0,0,0,0.3)"
    }
    const headTag ={
        color:"#fff",
        fontFamily:`"McLaren",cursive`,
        fontWeight:200
    }
    return ( 
        <header style={header}>
        <h1 style={headTag}>
            Keeper app
        </h1>
        </header> 
        
    );
}
 
export default Header;