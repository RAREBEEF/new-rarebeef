import React, { ReactElement, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Contact from "../routes/Contact";
import Profile from "../routes/Profile";
import Nav from "./Nav";
import Toolbar from "./Toolbar";
import Tutorial from "./Tutorial";
import { getGuestBookThunk } from "../redux/modules/getGuestBook";
import { useDispatch } from "react-redux";
import Start from "./Start";
import styles from "./App.module.scss";
const App = (): ReactElement => {
  const dispatch = useDispatch();

  const [tutorialActive, setTutorialActive] = useState<boolean>((): boolean =>
    localStorage.getItem("rarebeef_disableTutorial") === "true" ? false : true
  );

  useEffect((): void => {
    const rootEl = document.getElementById("root");

    if (!rootEl) {
      return;
    }

    if (!!tutorialActive) {
      rootEl.style.height = "100vh";
      rootEl.style.minHeight = "500px";
      rootEl.style.overflow = "hidden";

      return;
    }

    if (!tutorialActive) {
      rootEl.style.height = "auto";
      rootEl.style.overflow = "visible";

      return;
    }

    return;
  }, [tutorialActive]);

  useEffect((): void => {
    dispatch<any>(getGuestBookThunk());

    return;
  }, [dispatch]);

  // useEffect(() => {
  //   if (!start) {
  //     return;
  //   }

  //   const timer = setTimeout(() => {
  //     setStartAnimationEnd(true);
  //   }, 4500);

  //   return (): void => {
  //     clearTimeout(timer);
  //   };
  // }, [start]);

  return (
    <Router>
      {tutorialActive && <Tutorial setTutorialActive={setTutorialActive} />}
      <Nav setTutorialActive={setTutorialActive} />
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
