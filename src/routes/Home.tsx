import React, { useRef, useState } from "react";
import ThreeBeef from "../homeSections/ThreeBeef";
import Front from "../homeSections/Front";
import styles from "./Home.module.scss";
import PlaceReview from "../homeSections/PlaceReview";
import MetaBeef from "../homeSections/MetaBeef";
import classNames from "classnames";
import Toolbar from "../components/Toolbar";
import { HomePropType } from "../types";
import Clock from "../homeSections/Clock";

const Home: React.FC<HomePropType> = ({}) => {
  const HomeRef = useRef<any>(null);

  return (
    <div ref={HomeRef} className={classNames(styles.container)}>
      <Front />
      <ThreeBeef />
      <PlaceReview />
      <MetaBeef />
      <Clock />
    </div>
  );
};

export default Home;
