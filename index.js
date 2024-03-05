// in Library it takes minimum effort to put in our project
/*
    HMR- Hot Module Reloading
    File Watcher Algorithm
    Bundling
    Minify
    Cleaning our code
    Image Optimization
    Super Fast Build algorithm
    Dev and production build 
    Caching while development
    Compression
    Compatible with older version of browser
    Https on Dev
    port Number
    Consist Hashing Algo
    Tree Shaking - removing un-wanted

    / transitive dependencies -> if one dependency is using other dependency
    We use Babel with React to transpile the JSX code into simple React functions that can be understood by browsers. 
*/
import React from "react";
import ReactDOM from "react-dom/client";

// const heading1 = React.createElement('h1',{
//     id:'title1',
//     key:'h1'
// },'Heading 1');

// console.log('heading1',heading1);

// const heading2 = React.createElement('h2',{
//     id:"title2",
//     key:'h2'
// }, 'Heading 2');


// console.log(container);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);


/*
<div class="container">
    <ul>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>

*/
// const container2 = React.createElement('container',{},
// [React.createElement("ul",{},[
//     Reac.createElement("li",{},)
// ])])

const heading = (<h1 id="title" key="h1">
    Namaste React from JSX
    </h1>);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);