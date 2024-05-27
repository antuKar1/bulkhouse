import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
const a=true;
function App() {
const [count, setCount] = useState(0); 
function handleClick() { 
setCount(count + 1); 
console.log(count);
 } 
return ( 
<div> 
<p>Count: {count}</p> 
<button onClick={handleClick}>Increment</button> 
</div> 
);

}

export default App;
