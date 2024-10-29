import React from "react";
import { ReactDOM } from "react-dom";
import{navbar} from "./Components/Navbar.jsx";
function App(){
    return (
        <div>
            Hello react
           {navbar} 
        </div>
    )

}
ReactDOM.render(<App/>,getElementById("App"));
export default App;


