import React from 'react';
import ReactDOM from 'react-dom/client';

// const element = React.createElement('h1', { id: 'firstHeading'}, 'Hello World;');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element);


// another example for the nested application and siblings. 
const root = ReactDOM.createRoot(document.getElementById('root'));

const parent = React.createElement('div', { id: 'parent' }, 
    [
        React.createElement('h1', { id: 'firstHeading' }, 'Hello World'),
        React.createElement('p', { id: 'firstParagraph' }, 'This is a paragraph', React.createElement('span', { id: 'firstSpan' }, 'This is a span')),
    ],
    [
        React.createElement('h1', { id: 'firstHeading' }, 'Hello World'),
        React.createElement('p', { id: 'firstParagraph' }, 'This is a paragraph', React.createElement('span', { id: 'firstSpan' }, 'This is a span')),
    ], 

);
root.render(parent);