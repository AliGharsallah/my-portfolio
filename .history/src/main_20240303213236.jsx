import React from "react";
import { createRoot } from "react-dom"; // modifcation react  version 18
import MainApp from "./MainApp.jsx"; // Importez MainApp depuis le fichier correct


ReactDOM.render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
  document.getElementById('root')
);
