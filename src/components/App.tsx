import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Contact from "../routes/Contact";
import Profile from "../routes/Profile";
import Nav from "./Nav";
import Toolbar from "./Toolbar";
import { getGuestBookThunk } from "../redux/modules/getGuestBook";
import { useDispatch } from "react-redux";

const App = (): ReactElement => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("RAREBEEF's Portfolio");
  const htmlTitle = document.querySelector("title");

  useEffect((): void => {
    dispatch<any>(getGuestBookThunk());
  }, [dispatch]);

  useEffect(() => {
    if (!htmlTitle) {
      return;
    }

    htmlTitle.innerHTML = title;
  }, [htmlTitle, title]);

  return (
    <Router>
      <Nav />
      <Toolbar />
      <Routes>
        <Route path="/profile" element={<Profile setTitle={setTitle} />} />
        <Route path="/contact" element={<Contact setTitle={setTitle} />} />
        <Route path="/" element={<Home setTitle={setTitle} />} />
      </Routes>
    </Router>
  );
};

export default App;
