import React from "react"
import ReactDom from "react-dom/client"
import App from "./componets/app"
import "./index.css"


const root=ReactDom.createRoot(document.getElementById("root"))
root.render(
  <div>
  <App></App> 
  </div>
)