import React, { ReactElement, useEffect } from "react";
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

  useEffect((): void => {
    dispatch<any>(getGuestBookThunk());

    return;
  }, [dispatch]);

  return (
    <Router>
      <Nav />
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
