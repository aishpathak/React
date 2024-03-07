import React from "react";
import ReactDOM from "react-dom/client";

const myElement = (
    <>
    {"abc"}
    <h1 className="div1">Hello React</h1>
    <h2>Hello JSX</h2>
    </>
);

const Body = ()=>{
    return <MyElement1 name={"aish"}/>
}
// ('h1',{},
// "Hello React");
const MyElement1 = ({name})=>{
    return ( 
    <>
    <h1>{name}</h1>
    <h1>Hello React from functional Component and Name is</h1>
    </>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyElement1/>);