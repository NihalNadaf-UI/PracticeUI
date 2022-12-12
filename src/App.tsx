import React from "react";
import logo from "./logo.svg";
import img1 from "./components/img2.jpg";
import img2 from "./components/img1.jpg";
import img3 from "./components/img3.jpg";
import img4 from "./components/img4.jpg";
import img5 from "./components/img5.jpg";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Switch,
  Redirect,
} from "react-router-dom";
import OwlCard from "./components/OwlCard";

import "./components/owlcarousel.css";
import "./App.css";
// import Hello from "./components/JsxDemo";
// import PersonListFunc from "./components/PersonList";
// import SingleObjectFunc from "./components/Person";
// import Status from "./components/StatusAdvanceProps";
// import DestructuringPropsFunc from "./components/DestructuringProps";
//import { ButtonClickFunc } from "./components/Button";
// import { ButtonEventFunc } from "./components/ButtonWithEvent";
// import { InputEventFunc } from "./components/InputButton";
// import NameList from "./components/NameList";
import { UserForm } from "./components/UserForm";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
// import CardDetails from "./components/CardComponent";
// import { Carousels } from "./components/CarouselComponent";
// import { render } from "@testing-library/react";
import SimpleCarousel from "./components/SimpleCarousel";
import OwlCaraousels from "./components/OwlCaraousel";

function App() {
  const singlePersonName = {
    first: "Ritesh",
    last: "Deshmuk",
  };
  const nameList = [
    {
      id: 1,
      first: "Ajay",
      last: "Shukla",
    },
    {
      id: 2,
      first: "Deep",
      last: "Shukla",
    },
    {
      id: 3,
      first: "Vinay",
      last: "Deshmuk",
    },
  ];

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/carousel">
          <OwlCaraousels style={{ display: "flex" }}>
            <OwlCard
              style={{ background: "#424242" }}
              cardNo={1}
              imgSrc={img1}
            />
            <OwlCard
              style={{ background: "#424242" }}
              cardNo={2}
              imgSrc={img2}
            />
            <OwlCard
              style={{ background: "#424242" }}
              cardNo={3}
              imgSrc={img3}
            />
            <OwlCard
              style={{ background: "#424242" }}
              cardNo={4}
              imgSrc={img4}
            />
            <OwlCard
              style={{ background: "#424242" }}
              cardNo={5}
              imgSrc={img5}
            />

            <OwlCard
              style={{ background: "#424242" }}
              cardNo={6}
              imgSrc={img1}
            />
            <OwlCard
              style={{ background: "#424242" }}
              cardNo={7}
              imgSrc={img3}
            />
          </OwlCaraousels>
        </Route>
        <Route path="/userform">
          <UserForm />
        </Route>
        <Redirect exact from="/" to="/carousel" />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
