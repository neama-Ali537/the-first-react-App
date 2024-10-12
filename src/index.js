import React from "react";
import ReactDOM from "react-dom/client";

// css links:
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
// componant
import App from "./App";
import MediaContextProvider from "./ConText/MediaContext";
import AhthContextProvider from "./ConText/AhthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
    <AhthContextProvider>
      <MediaContextProvider>
        <App />
      </MediaContextProvider>
    </AhthContextProvider>
 
);
