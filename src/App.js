import { useState } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Footer from "./components/Footer";

import Home from "./pages";
import SigninPage from "./pages/signin";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
