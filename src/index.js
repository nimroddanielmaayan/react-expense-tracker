import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

//
/* General Summary - Sections 4 to 17 */
//

/* App.js - general information */

// This is the "master" component of the project. All other components will be nested inside it
// To insert a component into another component, we add it as an HTML tag (React understands that it's a component and not a regular HTML tag because of the capital letter in the beginning)
// Just like all React components, App.js needs to be capitalized
// NOTE: In the import statements at the beginning of the file, we omit the .js extention when we import .js files
// The concept of building a UI from a component tree is called "composition"

/* React props */

// "Props" is short for "properties"
// Props solve our need to pass information down the component tree
// In this example, the "items" are the props being passed down from App.js to Expenses.js
// Props don't have to be variables - they can be direct input, like a string

/* Section 3 - React Basics & Working With Components */

// JSX code - JSX stands for JS and XML (because HTML is a kind od XML)
// React components are basically functions
// Each react element can return only one root element (usually a div). Inside it we nest all of our other elements
// React code isn't exported as-is into the final distribution files. Instead, it's processed in the background before it's distributed and translated into "normal" HTML\CSS\JS
// To display the final site in our browser's local environment while developing, we need to run the "start" NPM script (either writing "npm start" in the terminal or with the NPM SCRIPTS dropdown on the left of the VSCode UI)
// The folder which we will work on during most React projects is the src folder
// In the past, it was necessary to import React in all JS files that use JSX. In projects that are built using the https://create-react-app.dev/ technique, react is automatically imported to all JS files

/* Summary - Section 4 */

// State changes don't happen immediately - they are scheduled, and then very quickly exectued

// State variables should be created using const, not let. That's because the state is re-created in every re-render (though the initial state value is not re-evaluated. It's only read during the first rendering of the component)

// The state can be updated on user interaction, on response to HTTP requests, on a timer ending, etc.

// Using prevState: If we store state as a single object, we need to use the prevState argument to the state update function to make sure we're working with the latest state. Otherwise, we might get errors that are caused by working with outdated state (remember - state updates are scheduled for the very near future, not executed immediately)

// The concept of 2-way binding: The state is used to update the UI, and the UI is used to update the state. This is what happens, for example, when we assign a computed, updated value to an input field which is updated on change (2-way binding and user forms usually go hand in hand)

// Clearing the inputs: It's very common to clear the inputs after the user submits the form. We can do that by assigning empty strings to the state variables which are used to store the input values

// Child to parent component communication: We can pass a function from the parent component to the child component, and then call it from the child component. This is a common way to pass data from a child component to a parent component

// Lifting the state: The best practice is to lift the state to the lowest component which still gives us the access that we need, but no higher. This is because the higher we lift the state, the more components will be re-rendered when the state changes

// React components can be either stateful ("smart") or stateless ("dumb"). In most React apps, there will be more stateless components than stateful components

// Conditional rendering in React: The array method that's usually used to render content is map(). When rendering an array in JSX, it will be displayed it's seperate items

// The only conditional statement allowed inside JSX is the ternary operator. if-else statements, etc are not allowed. Also. short circuit evaluation can be used inside JSX

// The special "style" prop in React: The style prop is an object which recieves CSS properties. The CSS property names are camelCased (instead of kebab-case). Also, the values are strings (even if they're numbers, so that they can be turned into CSS). Any CSS property which already exists will be overwritten by the style prop

/* ExpenseItem.js component - general information */

// This is our first custom component
// It's a convention to put custom components inside a "components folder"
// It's a convention to give a component's CSS file the same name as the JS file
// It's a convention to name all components starting with a capital letter
// importing CSS is impossible in vanilla JS, but it is possible in React. This is thanks to the processing which is being done behind the scenes
// After we've assigned props in the parent component, we need to put them into the child component. We do this by assigning them as a parameter to the component function. It's a convention to call this parameter "props". All of the props are passed to the child component as one object that includes key-value pairs of the data that was passed from the parent component
// A component that has no information between the opening and closing tags, can be written as a "self closing tag", like <ExpenseDate /> in this example
// This "passes on" data from App.js to ExpenseDate.js, in the row <ExpenseDate date={props.date} />. We can't "skip" components
