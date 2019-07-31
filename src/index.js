import React, { useState } from "react";
import ReactDOM from "react-dom";
import Menu from "./components/menu";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "./pages/inicio";
import Portafolio from "./pages/portafolio";
import Contacto from "./pages/contacto";
import Contactanos from "./components/contactanos";

import "./styles.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <BrowserRouter>
        <Menu setShowModal={setShowModal} />
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/inicio" component={Inicio} />
          <Route path="/portafolio" component={Portafolio} />
          <Route
            path="/contacto"
            render={() => <Contacto setShowModal={setShowModal} />}
          />
        </Switch>
      </BrowserRouter>
      <Contactanos show={showModal} onHide={() => setShowModal(false)} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
