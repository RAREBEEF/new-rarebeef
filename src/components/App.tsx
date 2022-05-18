import React, { ReactElement, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Contact from "../routes/Contact";
import Profile from "../routes/Profile";
import Nav from "./Nav";
import Toolbar from "./Toolbar";
import Tutorial from "./Tutorial";

const App = (): ReactElement => {
  const [tutorialActive, setTutorialActive] = useState<boolean>(() =>
    localStorage.getItem("rarebeef_disableTutorial") === "true" ? false : true
  );

  useEffect(() => {
    const rootEl = document.getElementById("root");

    if (!rootEl) {
      return;
    } else if (!!tutorialActive) {
      rootEl.style.height = "100vh";
      rootEl.style.overflow = "hidden";
    } else if (!tutorialActive) {
      rootEl.style.height = "auto";
      rootEl.style.overflow = "visible";
    }
  }, [tutorialActive]);

  return (
    <Router>
      {tutorialActive && <Tutorial setTutorialActive={setTutorialActive} />}
      <Nav setTutorialActive={setTutorialActive}/>
      <Toolbar />
      <Routes>
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
