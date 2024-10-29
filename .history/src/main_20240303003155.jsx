import React from "react";
import ReactDOM from "react-dom";
import MainApp from "./MainApp.jsx"; // Importez MainApp depuis le fichier correct
import './main.css';

ReactDOM.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
  document.getElementById('root')
);
