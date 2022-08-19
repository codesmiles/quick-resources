import React from "react";

const Card = (props) => {
    
  return (
    <div>
    <h1>Hello</h1>
    <p>My name is {props.name}</p>
    <p>I am suppose to be  {props.age} years</p>
    <p>My stacks are {props.stack}</p>
    </div>
  );
};

export default Card;
