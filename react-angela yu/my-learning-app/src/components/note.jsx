import React from "react";

const Note = (props) => {
    return ( 
        <div className="note">
            <h1 className="title">{props.title}</h1>
            <p className="content">{props.content}</p>
        </div>
     );
}
 
export default Note;