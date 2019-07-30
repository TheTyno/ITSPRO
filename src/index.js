import React from "react";
import ReactDOM from "react-dom";
import Menu from "./components/menu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "./pages/inicio";
import Portafolio from "./pages/portafolio";
import Contacto from "./pages/contacto";

import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/inicio" component={Inicio} />
        <Route path="/portafolio" component={Portafolio} />
        <Route path="/contacto" component={Contacto} />
      </Switch>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
