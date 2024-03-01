import React from "react";
import { ReactDOM } from "react-dom";
import {Navbar} from "./Components/Navbar.jsx";
function App(){
    return (
        <div>
            Hello react
        <Navbar/>

        </div>
    )

}
ReactDOM.render(<App/>,getElementById("App"));
export default App;


