import React from "react";
import "./styles.css";
import Authentification from "./components/Authentification";
import NavigationBar from "./components/utils/NavigationBar";

export default function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Authentification />
    </div>
  );
}
