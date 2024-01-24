import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// const otherElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit google",
// };

// const otherElement2 = (
//   <a href="https://google.com" target='_blank'>Visit Google </a>
  
// )
// console.log(typeof otherElement2); // object
// console.log(Object.keys(otherElement2)); // (7) ['$$typeof', 'type', 'key', 'ref', 'props', '_owner', '_store']

// const reactElement = React.createElement(
//   'a',
//   {href:'https://google.com',target :'_blank'},
//   'Click me to visit google'
// )
// console.log(typeof reactElement); // object
// console.log(Object.keys(reactElement)); // (7) ['$$typeof', 'type', 'key', 'ref', 'props', '_owner', '_store']


ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
    // App()
    // otherElement  // Uncaught Error: Objects are not valid as a React child
    // otherElement2
    // reactElement
)

