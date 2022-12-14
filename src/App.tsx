import React from "react";
import img1 from "./components/img2.jpg";
import img2 from "./components/img1.jpg";
import img3 from "./components/img3.jpg";
import img4 from "./components/img4.jpg";
import img5 from "./components/img5.jpg";
import firefox from "./components/firefox.jpg";
import google from "./components/google.jpg";
import ie from "./components/edge.jpg";
import gmail from "./components/GmailApp.jpg";
import fb from "./components/fb.jpg";
import insta from "./components/insta.webp";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Switch,
  Redirect,
} from "react-router-dom";
import Card from "./components/CarouselCard";

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
import Caraousel from "./components/Caraousel";
import { width } from "@mui/system";
import { Button, Link } from "@mui/material";

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
          <Caraousel
            style={{
              display: "flex",
              gap: "16px",
              height: "250px",
            }}
          >
            <Card
              style={{
                background: "#424242",
                width: "280px",
                height: "200px",
              }}
              cardNo={1}
            />
            <Card
              style={{
                background: "#424242",
                width: "280px",
                height: "200px",
              }}
              cardNo={2}
            />
            <Card
              style={{
                background: "#424242",
                width: "280px",
                height: "200px",
              }}
              cardNo={3}
            />
            <Card
              style={{
                background: "#424242",

                width: "280px",
                height: "200px",
              }}
              cardNo={4}
            />
            <Card
              style={{
                background: "#424242",
                width: "280px",
                height: "200px",
              }}
              cardNo={5}
            />

            <Card
              style={{
                background: "#424242",
                width: "280px",
                height: "200px",
              }}
              cardNo={6}
            />
            <Card
              style={{
                background: "#424242",
                width: "280px",
                height: "200px",
              }}
              cardNo={7}
            />
          </Caraousel>
        </Route>
        <Route path="/userform">
          <UserForm />
        </Route>
        <Route path="/imagecarousel">
          <Caraousel
            style={{
              background: "white",
              gap: "16px",
              display: "flex",
              height: "250px",
            }}
          >
            <Card
              style={{
                background: "#424242",
                marginLeft: "10px",
              }}
            >
              <Link href="http://www.firefox.com" underline="hover">
                <img
                  src={firefox}
                  alt=""
                  style={{ width: "200px", height: "200px" }}
                />
              </Link>
            </Card>

            <Card
              style={{
                background: "#424242",
                marginLeft: "10px",
              }}
            >
              <Link href="http://www.google.com" underline="hover">
                <img
                  src={google}
                  alt=""
                  style={{ width: "200px", height: "200px" }}
                />
              </Link>
            </Card>

            <Card
              style={{
                background: "#424242",
                marginLeft: "10px",
              }}
            >
              <Link
                href="https://www.microsoft.com/en-in/download/internet-explorer.aspx"
                underline="hover"
              >
                <img
                  src={ie}
                  alt=""
                  style={{ width: "200px", height: "200px" }}
                />
              </Link>
            </Card>

            <Card
              style={{
                background: "#424242",
                marginLeft: "10px",
              }}
            >
              <Link href="http://www.gmail.com" underline="hover">
                <img
                  src={gmail}
                  alt=""
                  style={{ width: "200px", height: "200px" }}
                />
              </Link>
            </Card>

            <Card
              style={{
                background: "#424242",
                marginLeft: "10px",
              }}
            >
              <Link href="http://www.facebook.com" underline="hover">
                <img
                  src={fb}
                  alt=""
                  style={{ width: "300px", height: "200px" }}
                />
              </Link>
            </Card>

            <Card
              style={{
                background: "#424242",
                marginLeft: "10px",
              }}
            >
              <Link href="http://www.instagram.com" underline="hover">
                <img
                  src={insta}
                  alt=""
                  style={{ width: "200px", height: "200px" }}
                />
              </Link>
            </Card>
            <Card
              style={{
                background: "#424242",
                marginLeft: "10px",
              }}
            >
              <Link
                href="https://www.microsoft.com/en-in/download/internet-explorer.aspx"
                underline="hover"
              >
                <img
                  src={ie}
                  alt=""
                  style={{ width: "200px", height: "200px" }}
                />
              </Link>
            </Card>

            <Card
              style={{
                background: "#424242",
                marginLeft: "10px",
              }}
            >
              <Link href="http://www.gmail.com" underline="hover">
                <img
                  src={gmail}
                  alt=""
                  style={{ width: "200px", height: "200px" }}
                />
              </Link>
            </Card>
          </Caraousel>
        </Route>

        <Redirect exact from="/" to="/carousel" />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
