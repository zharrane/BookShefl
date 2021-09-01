import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./index.css"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Search from "./Search"

ReactDOM.render(
  <Router>
    <Route path="/" exact component={App} />
    <Route path="/search" exact component={Search} />
  </Router>,
  document.getElementById("root")
)
