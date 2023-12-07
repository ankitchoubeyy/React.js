// step 3: create a function which will help to render the element.
function customRender (reactElement, container){
    const domElement = document.createElement(reactElement.type); // anchor tag created
    domElement.innerHTML = reactElement.children; // adding text

    domElement.setAttribute("href", "reactElement.props.href"); // to add href
    domElement.setAttribute("target", "reactElement.props.target"); // to add target

    container.appendChild(domElement); // domElement is append as a child of main container
}

// step 2: Create a react element which has key value pairs.
const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    children: "click me to visit google"
}

// step 1: Gain the access of your main conatainer from your html file.
const mainContainer = document.getElementById("root");


// step 4: call the function to render the element
customRender(reactElement, mainContainer);
