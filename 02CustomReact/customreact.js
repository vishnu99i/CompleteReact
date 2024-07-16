function customRender(reactElement,container){

   /* 
      This method is a long method
         const domElement = document.createElement(reactElement.type);
         domElement.innerHTML = reactElement.children;
         domElement.setAttribute("href",reactElement.props.href);
         domElement.setAttribute("target",reactElement.props.target);
         container.appendChild(domElement);
   */
//Simplemethod using loop
const domElement = document.createElement(reactElement.type);
domElement.innerHTML = reactElement.children;
for (const prop in reactElement.props) {
      if(prop === "children"){
         continue;
      }
      domElement.setAttribute(prop,reactElement.props[prop]);
}
container.appendChild(domElement);
}

const reactElement = {
   type: "a",
   props: {
      href: "https://google.com",
      target: "_blank"
   },
   children: "Click here to visit Google"
}

const mainContainer = document.querySelector("#root");
customRender(reactElement,mainContainer);
//Inject "reactElement" into "mainContainer"