import React, { useRef, useState } from "react";
import ThreeBeef from "../homeSections/ThreeBeef";
import Front from "../homeSections/Front";
import styles from "./Home.module.scss";
import PlaceReview from "../homeSections/PlaceReview";
import MetaBeef from "../homeSections/MetaBeef";
import classNames from "classnames";
import Toolbar from "../components/Toolbar";
import { HomePropType } from "../types";

const Home: React.FC<HomePropType> = ({ scrollMod, setScrollMod }) => {
  const HomeRef = useRef<any>(null);

  return (
    <div ref={HomeRef} className={classNames(styles.container)}>
      <Front />
      <ThreeBeef scrollMod={scrollMod} setScrollMod={setScrollMod} />
      <PlaceReview />
      <MetaBeef />
    </div>
  );
};

export default Home;
