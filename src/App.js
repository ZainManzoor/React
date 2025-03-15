import React from 'react';
import ReactDOM from 'react-dom/client';

// const element = React.createElement('h1', { id: 'firstHeading'}, 'Hello World;');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);


// another example for the nested application and siblings. 
const root = ReactDOM.createRoot(document.getElementById('root'));

// const parent = React.createElement('div', { id: 'parent' }, 
//     [
//         React.createElement('h1', { id: 'firstHeading' }, 'Hello World'),
//         React.createElement('p', { id: 'firstParagraph' }, 'This is a paragraph', React.createElement('span', { id: 'firstSpan' }, 'This is a span')),
//     ],
//     [
//         React.createElement('h1', { id: 'firstHeading' }, 'Hello World'),
//         React.createElement('p', { id: 'firstParagraph' }, 'This is a paragraph', React.createElement('span', { id: 'firstSpan' }, 'This is a span')),
//     ], 

// );

// Using JSX.
const JSXObject = <h1 id="jsx-heading">My Name is Zain, I am from JSX</h1>;
const JSXClassObject = (
<div>
    <h1 id="jsx-heading">My Name is Zain, I am from JSX</h1>
    <p>This is a paragraph</p>
    <span>This is a span</span>
</div>
);

// Functional Components: 
const HeadingComponent = () => {
    return <h1>Functional Heading Component </h1>;
};

const ParagraphComponent = () => ( 
    <div>
        <span>Hello I am the person from the paragraph</span>
    </div>
)

const parent = (
    <div>
        <h1>Parent Component</h1>
        <HeadingComponent />
        <ParagraphComponent />
    </div>
)

const number = 10000;

const JSXObjectWithFunctionalComponent = (
    <div>
        <HeadingComponent /> 
        <ParagraphComponent />
        {/* {parent} */}
        {number}
        {ParagraphComponent()}
        <div>
            I am the JSX Object from the functional component.
        </div>
    </div>
)


console.log(JSXObject);
console.log(parent);
root.render(parent);
root.render(JSXClassObject);
root.render(JSXObjectWithFunctionalComponent);