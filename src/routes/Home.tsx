import React, { useRef } from "react";
import ThreeBeef from "../homeSections/ThreeBeef";
import Front from "../homeSections/Front";
import styles from "./Home.module.scss";
import PlaceReview from "../homeSections/PlaceReview";
import MetaBeef from "../homeSections/MetaBeef";
import classNames from "classnames";
import { HomePropType } from "../types";
import Clock from "../homeSections/Clock";
import BrowserStart from "../homeSections/BrowserStart";
import SimpleMemo from "../homeSections/SimpleMemo";
import Flip from "../components/Flip";

const Home: React.FC<HomePropType> = ({ startAnimationEnd }) => {
  const HomeRef = useRef<any>(null);

  return (
    <div ref={HomeRef} className={classNames(styles.container)}>
      <Front startAnimationEnd={startAnimationEnd} />
      {!startAnimationEnd && <Flip />}
      <ThreeBeef />
      <PlaceReview />
      <MetaBeef />
      <BrowserStart />
      <SimpleMemo />
      <Clock />
    </div>
  );
};

export default Home;
