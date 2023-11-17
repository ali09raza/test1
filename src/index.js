/* var React = require("react");
var ReactDOM = require("react-dom/client"); */
/* import React from "react";
import ReactDOM from "react-dom";
ReactDOM.render(<div><h1>Hello React</h1></div>,document.getElementById("root"));
 */
//creating root for jsx html elements in page
/* import React from "react";
import { createRoot } from "react-dom/client";
const test =document.getElementById("tag1");
const test1 = createRoot(test);
test1.render(<div><h1>Ali raza</h1> <p>Hi welcome back</p></div>);
//To remove extra div we use fragment
const root1 = document.getElementById("root");
const root2 = createRoot(root1);
root2.render(<React.Fragment><h1>Hello React</h1> <h2>Hi javascript</h2></React.Fragment>); */
/* import React from "react";
import { createRoot } from "react-dom/client";
const test =document.getElementById("tag1");
const test1 = createRoot(test);
test1.render(<><h1>Ali raza</h1> <p>Hi welcome back</p></>);
//To remove extra div we use fragment
const root1 = document.getElementById("root");
const root2 = createRoot(root1);
root2.render(<><h1>Hello React</h1> <h2>Hi javascript</h2></>); */

 import React from "react";
 import {createRoot} from "react-dom/client";
 const root1=document.getElementById("root");
 const root2=createRoot(root1);
 let name ="Net-flix";
 const fname="ALi";
 const lname="Raza";
 root2.render(<><h1>Best {name} Series</h1><p>Below are best netflix and sum is {4+8}</p><p>Random function {Math.random()}</p>
 <p>{`My name is ${fname} ${lname}`}</p>
  <ol><li>Game of thrones</li><li>y</li><li>z</li></ol>
  
  </>)

