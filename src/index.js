import React from "react";
import ReactDOM from "react-dom";
import Hello from "./HTML/Hello";
import Header from "./Header";
import Footer from "./Footer";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Projects from "./Projects";
import About from "./About";
import MyCV from "./MyCV";



const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Hello}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/projects" component={Projects}></Route>
        <Route exact path="/mycv" component={MyCV}></Route>
      </Switch>
      <Footer />
    </>
  );
};

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>, 
document.getElementById("app")
);
