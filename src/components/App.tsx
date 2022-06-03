import React, { ReactElement, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Contact from "../routes/Contact";
import Profile from "../routes/Profile";
import Nav from "./Nav";
import Toolbar from "./Toolbar";
import Tutorial from "./Tutorial";
import { getGuestBookThunk } from "../redux/modules/getGuestBook";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStateType, setStartStateType } from "../types";
import Start from "./Start";
import Flip from "../three/Flip";

const App = (): ReactElement => {
  const dispatch = useDispatch();
  const { start } = useSelector(
    (state: ReduxStateType): setStartStateType => state.setStart
  );

  const [tutorialActive, setTutorialActive] = useState<boolean>((): boolean =>
    localStorage.getItem("rarebeef_disableTutorial") === "true" ? false : true
  );
  const [startAnimationEnd, setStartAnimationEnd] = useState<boolean>(false);

  useEffect((): void => {
    const rootEl = document.getElementById("root");

    if (!rootEl) {
      return;
    }

    if (!!tutorialActive || !startAnimationEnd) {
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
  }, [startAnimationEnd, tutorialActive]);

  useEffect((): void => {
    dispatch<any>(getGuestBookThunk());

    return;
  }, [dispatch]);

  useEffect(() => {
    if (!start) {
      return;
    }

    const timer = setTimeout(() => {
      setStartAnimationEnd(true);
    }, 6000);

    return (): void => {
      clearTimeout(timer);
    };
  }, [start]);

  return (
    <Router>
      {!start && <Start />}
      {tutorialActive && <Tutorial setTutorialActive={setTutorialActive} />}
      <Nav setTutorialActive={setTutorialActive} />
      <Toolbar />
      <Routes>
        <Route
          path="/profile"
          element={<Profile setStartAnimationEnd={setStartAnimationEnd} />}
        />
        <Route
          path="/contact"
          element={<Contact setStartAnimationEnd={setStartAnimationEnd} />}
        />
        <Route
          path="/"
          element={<Home startAnimationEnd={startAnimationEnd} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
