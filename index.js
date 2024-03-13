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

/*Name of the component start with capital letter // functional component   
 functional component is a noramla function it is returing some piece of JSX
`What is react element : it is an object
What is functional component : it is a function
<Title></Title> or {Title()}
if you got xss(Cross Side Scripting attack) attack still JSX will take care of this, if you have put your code here {} JSX will take care of this
from any kind of XSS
how it does it , if you give anything is {} it will santizes it.

<Title>// if we use this way.. we call it component composition.    
*/

const Title = ()=>(
    <img 
    alt="logo" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fyt3.ggpht.com%2Fytc%2FAKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5%3Ds800-c-k-c0x00ffffff-no-rj&tbnid=45PuluQGRYSthM&vet=12ahUKEwi52qGD4N6EAxWMa2wGHQvNBpMQMygEegQIARA7..i&imgrefurl=https%3A%2F%2Fwww.speakrj.com%2Faudit%2Freport%2FUCHm4VJ95cMP434x059ZmLtw%2Fyoutube%2Fincome-stats&docid=9JCbl9Qk7NxW_M&w=800&h=800&itg=1&q=food%20villa&ved=2ahUKEwi52qGD4N6EAxWMa2wGHQvNBpMQMygEegQIARA7" />
    );

const HeaderComponent = ()=>{ 
    return (
    <div>
        {console.log('Any JS Code')}
        <Title></Title>
        <h1>
            Namaste React from functional component
        </h1>
    </div>);
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);