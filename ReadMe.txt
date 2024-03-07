JSX is a HTML Like sysntax in javascript but not its javascript

functional component or any component, name start with Capital letter.

Any JSX component you write there can be only one parent element.
for that we have react.fragment
and what is React.fragment: is a component which is exported by React

--> JSX has only one parent so we can write AS BELOW 
const jsx =(
    <React.Fragment>
        <h1>JSX</h1>
        <h1>Second JSX</h1>
    </React.Fragment>
);
root.render(jsx)

It is an empty tag

--> We will make our UI dynamic, and we call this type of UI config driven UI

--> Virtual DOm
    --> Representation of a DOM with us is known as Vertual DOM
    --> React uses an Algorithm named as Reconcilation to diff one tree from other.Diff Algorithm.
    --> it only change that node if that node values has changed not change all node.. due to this facillity React is fast.

Virtual Dom is a Representation of actual DOM. it uses reconilation process which uses diff algorithm which compares previous and new node if
it find their is any change then only that node it will re render not all DOm.
it uses key to make it fast.. supoose we have 3 div .. how will it come to know which one need to rerender.with the help of key it only render that node.
