# React

- React is a JavaScript library for building user interfaces.

- React is used to build single-page applications.

- React allows us to create reusable UI components.
---
_Q1._ If react is a library of js then why we use react instead of js ?
_Ans:_ 
 Js is a 
 - **imperative language** : need to define each and every step.
 React is a
 - **Declaritive language** : no need to define each and every step just the last state. 

---

### Creating a Vite React app

```
npm create vite@latest
```

> choose --> **React** --> **JavaScript** --> Move to the created directory

**Then install node**

```
npm install
```

**To run your vite Project**

```
npm run dev
```

---

### File Extension

1. **.js**

- Stand for javaScript.
- It consists regular javaScript code.
- Used for general logics and components.

1. **.jsx**

- Stand for javaScript XML.
- Combine javaScript with html like tags.
- Make it easier to design UI components.
- JSX gets converted into regular JavaScript

_Note_
[Bebeljs.io](https://bebeljs.io/repl) is a tool which allows you to see that how jsx is transformed into javaScript

---

### 01 React Components

Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

**Types of Components in React**

1. **Class Components**

- Stateful
- Lifecycle
- Not preferred any more

2. **Function Components**

- Initially Stateless
- can use **Hooks** for state and effects
- Simpler and more concise
- More popular

To create a components use **.jsx** file.

```
function App() {

  return (
    <>

    </>
  )
}

export default App
```

> Here, Js Function is used as a components.

_Note:_

1. Function naming convention should always be in Capitalize manner.
2. Function can return only one HTML tag. so, it is better to use a wrapper or fragments (<> </>).

```
<>
   Other components will come here.
</>
```

> To use an exported component you always need to import that component.

```
import Card from "./.Card"
```

**There are mainly three types of export :**

1. one default export

```
function myFun(){

}

export default myFun;

```

2. Multiple named exports

```
export function myFun(){

}
export function navbar(){

}
```

3. one default and multiple exports

```
export function myFun(){

}

export default function navbar(){

}
```

_Important Points_

- **Naminng convention** of Components must be _capitalized_ and lowercase for default _HTML_
- **CSS** can be directly imported into the components file.

```
import './index.css'
```

**Dyanmic Components**

1. jsx allows the creation and intereactive UI components.
2. using {} we can embed any js expression directly with the jsx. This includes variables, function calls and more.

**Reusable Components**

1. _Modularity_ : easy reuse of components accross different components.
2. _Consistency_ : It makes UI very consistence.
3. _Efficiency_ : Reduces programmer's developement time as well as avoid duplication of code.
4. _Maintainablity_ : Changes made to reused components reflect everywhere.

_Note_: If you want to add inline css in your components then you should use `style = {{'background-color':'red'}}`

---

### 02 Adding Bootstrap

1. `npm i bootstrap@5.3.2`
2. import the path in your main.jsx file.

```
import 'bootstrap/dist/css/bootstrap.min.css';
```

Now just bring your bootstrap components and paste it.

_Note:_ If you want to remove **Warnings** from the react files. Follow the given below instruction:

1. Go to **ESLint** confuguration file.
2. Define rules

```
rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
      {"react/jsx-key": "off"},
    ],
  },
```

---

### 03 Fragments

React Fragment is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM.

You need to import React from react.
`import React from "react";`

**Syntax**

```
<React.Fragment>
  <h1 className="fw-bolder">Bharat Clock</h1>
</React.Fragment>
```

_Shortcut Method_

```
<>
  <h1 className="fw-bolder">Bharat Clock</h1>
</>
```

**Why Fragments?**

- Returns multiple elements without wrapping parent.

---

### 04 Map Method

The map() function is used to iterate over an array and manipulate or change data items. In React, the map() function is most commonly used for rendering a list of data to the DOM.

```
function HealthyFoods() {
  let foodItem = ["Apple","Mango","Milk","Banana"]
  return (
    <>
      foodItem.map((items)=>{
        <li>{items}</li>
      })
    </>
  )
}
```

**Purpose**

- Render list from array data.

**Key Prop:**

- Assign Unique key for optimized re-renders.

```
<div key={item.id}>{item.name}</div>
```

---

### 05 Conditional Rendering

- Displaying Content based on certain conditions.
- Allows for dynamic user interfaces.

**Methods**

- _If-else Statements:_ Choose between two blocks of content.
- _Ternary operator:_ Quick way to choose between two options.
- _Ternary operator:_ Useful for rendering content when a condition is true.

**Benefits**

- Enhances user experience.
- Reduces unnecessary rendering.
- Makes app more interactive and responsive.

---

### 06 React Hooks

- Props are arguments passed into React components.
- Props are passed to components via HTML attributes.
- It is a mechanism for passing data.
- Read only by default

**Usage**

- Pass data from parent to child component.
- Makes components reusable.
- Defined as _attributes_ in JSX.

**Exapmle**
Send the "brand" property from the Garage component to the Car component:

```
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
    </>
  );
}
```

---

### 07 CSS Modules

- Another way of adding styles to your application is to use CSS Modules.

- CSS Modules are convenient for components that are placed in separate files.

_Note:_ The CSS inside a module is available only for the component that imported it, and you do not have to worry about name conflicts.

1. Create the CSS module with the .module.css extension, example: `Navbar.module.css`

2. Import the stylesheet in your component:
   `import styles from './Navbar.module.css'; `

3. Apply your css in your class name. example:
   `<h1 className={styles.todoHeading}>Todo APP</h1>`

**Benefits**

- Helps in creating component-specific style.
- Automatically generates unique class names.
- Promotes modular and maintainable css.

---

### 08 Handling Events

Just like HTML DOM events, React can perform actions based on user events.

React has the same events as HTML: click, change, mouseover etc.

- React events uses camelCase. ex- onClick instead of onclick.
- React event handlers are written inside curly braces: `onClick={shoot}`
- Avoid inline arrow function in JSX for perfomance.

some events names are : onClick- to control clicks, onChange - for controlled form inputs, etc.

_exapmple_

```
function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}
```

---

### 09 Passig Function via Props

- Pass **dynamic behaviour** between components.
- **Enables** upward communication from child to parent.
- Commonly used for **event handling**.
- Parent defines a function, child invokes it.
- **Enhances** component interactivity.

_example_
`<button onClick={handleClick}/>`

---

### 10 States And Hooks in React

**States**

React components has a built-in state object.

The state object is where you store property values that belong to the component.

When the state object changes, the component re-renders.

**Hooks**

Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.

> Hooks allow us to "hook" into React features such as state and lifecycle methods.

- Hooks were added to React in version 16.8.

**Hook Rules**

There are _3 rules_ for hooks:

1. Hooks can only be called inside React function components.
2. Hooks can only be called at the top level of a component.
3. Hooks cannot be conditional.

_Note:_ You must import Hooks from react.

1. _useState Hook_ is used to keep track of the application state.

We initialize our state by calling useState in our function component.

`useState` accepts an initial state and returns two values:

- The current state.
- A function that updates the state.
  `const [color, setColor] = useState("red")`

_Example:_

```
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <button
        type="button"
        onClick={() => setColor("red")}
      >Red</button>
      <button
        type="button"
        onClick={() => setColor("pink")}
      >Pink</button>
      <button
        type="button"
        onClick={() => setColor("green")}
      >Green</button>
    </>
  );
}
```

_**Notice**_ that we are destructuring useState from react as it is a named export.

**What Can State Hold?**
The useState Hook can be used to keep track of strings, numbers, booleans, arrays, objects, and any combination of these!

---

### 11 Controlled Components

In React, Controlled Components are those in which form’s data is handled by the component’s state. It takes its current value through props and makes changes through callbacks like onClick,onChange, etc. A **parent component manages its own state and passes the new values as props** to the controlled component.

*Various Controlled Elements*

1. **Text Input**
`<input type="text" value={value} onChange={(e) => handleChange(e.target.value)} />`

2. **Textarea**
`<textarea value={value} onChange={(e) => handleChange(e.target.value)} />`

3. **Select**
```
// Controlled select dropdown
<select value={selectedValue} onChange={(e) => handleSelectChange(e.target.value)}>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
</select>

```

---

### 12 React Icon Library

Want to add react icons in your project then visit [React icons](https://react-icons.github.io/react-icons)

**1. Installation** (for standard modern project)
```
npm install react-icons --save
```

**2. import**
your need to import that particular icons to use in your react project.
`import { iconsName } from 'react-icons/familyName';`
_example_
```
import { FaBeer } from 'react-icons/fa';
```

**3. Usage**
use your icons name as a component whereever you wanted to add.
`<FaBeer />`

---

### 13 Inspecting React Dev Tools

Use React Developer Tools to inspect React components, edit props and state, and identify performance problems.

The easiest way to debug websites built with React is to install the React Developer Tools **browser extension**. It is available for several popular browsers:

It helps in many ways: 
- Inspection
- Navigation
- Performance
- Real time feedback

---

### 14 Context API In React

In React, "context" refers to a feature that allows data to be passed through the component tree without having to pass props down manually at every level. It provides a way to share values like themes, user authentication status, or any other global data without explicitly passing them through each level of the component tree.

The React.createContext function is used to create a context object. This object has **two components**:

**1. Provider**: This component is used to wrap the part of the component tree where you want to make the context available. It takes a value prop, which allows you to pass the data you want to share.

**2. Consumer**: This component is used to consume the context within a component. It can be used either with the Context.Consumer component or the **useContext** hook.

**How to import Context?**
`import { createContext, useContext } from "react";`

**Mainly Involves Three things:**
1. Create Context
2. Provide Context
3. Consume / Use Context

```
// Creating the context
export const ThemeContext = createContext({
    themeMode: "light",
    darkMode: () => {},
    lightMode: () => {}
})

// Providing the context to all other components
export const ThemeProvider = ThemeContext.Provider;

// Creating our custom hook useTheme(){} to consume the context
export default function useTheme () {
    return useContext(ThemeContext)
}
```

---

### 15 React Router

React Router is a popular library for handling navigation and routing in React applications. It enables you to build single-page applications (SPAs) with dynamic, client-side routing. React Router helps manage the UI state of your application as the user navigates through different views or components, without triggering a full page reload.

**Installation Through Command**
`npm install react-router-dom`

**Adding a Router**
- First thing to do is create a Browser Router and configure our first route. This will enable client side routing for our web app.

- The *main.jsx* file is the entry point. Open it up and we'll put React Router on the page.

_Steps to Router_
1. Import createBrowserRouter and RouterProvider form react-router-dom
2. Define a Router using createBrowserRouter which takes an array having object containig path and element(where component has to be passed for rendering).
3. Initialize RouterProvider with the Router = { router}
```
// Step-1
import {createBrowserRouter, RouterProvider} from "react-router-dom";

// Step-2
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  // Step-3
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

**React Layout**
Routes define the different views or pages of your application, and layout routes specifically focus on how these views are arranged or nested within a layout.
_Example_
```
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children: [
      {path:"/",element: <Home/>},
      {path:"/contact",element: <Contact/>},
      {path:"/about",element: <About/>}
    ],
  }
])
```
_Note:_ use `<Outlet />` in your app.

- `<Outlet />`:Renders the child route's element, if there is one.

--- 

### 16 Redux

- **Redux** is a state management library that helps manage the state of your application in a predictable way. It is often used with React, but it can be used with any JavaScript framework or library.

- Redux **follows a unidirectional data flow pattern**, meaning that the state of your application is stored in a single JavaScript object called the "store." The only way to change the state is by emitting an action, which is an object describing what happened. The store's state is then modified by pure functions called "reducers."

**_Reasons to use React Redux:_**

1. **Centralized State Management:**
- Redux allows you to manage the state of your entire application in a single, centralized store. This makes it easier to reason about the state and enables better debugging and testing.

2. **Predictable State Changes:**
- With Redux, state changes are made through pure functions called reducers. This ensures that state changes are predictable and easy to trace, making it easier to understand how your application behaves.

3. **Scalability:**
As your React application grows in complexity, managing state using local component state can become challenging. Redux provides a scalable solution by centralizing state management and making it more maintainable as your project expands.

4. **Debugging:**
The Redux DevTools extension provides a powerful debugging toolset for inspecting and time-traveling through state changes. This can be invaluable for tracking down bugs and understanding how your application's state evolves over time.

5. **Middleware Support:**
Redux supports middleware, which allows you to extend its capabilities. Middleware can be used for tasks like asynchronous operations, logging, and more.


### 17 Redux Toolkit 

- Redux Toolkit is the official, opinionated toolset for Redux, designed to make Redux development more efficient and enjoyable. 
- It provides a set of utilities and abstractions to simplify common Redux use cases, helping developers write Redux logic with less boilerplate code. 
- Redux Toolkit is not a separate library; instead, it's a collection of utilities that can be used alongside Redux.

**Installation**

1. `npm install @reduxjs/toolkit`

2. `npm install react-redux`







