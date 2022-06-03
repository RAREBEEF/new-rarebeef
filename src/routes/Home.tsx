import React, { useRef } from "react";
import ThreeBeef from "../homeSections/ThreeBeef";
import Front from "../homeSections/Front";
import styles from "./Home.module.scss";
import PlaceReview from "../homeSections/PlaceReview";
import MetaBeef from "../homeSections/MetaBeef";
import classNames from "classnames";
import { HomePropType, ReduxStateType, setAnimationStateType } from "../types";
import Clock from "../homeSections/Clock";
import BrowserStart from "../homeSections/BrowserStart";
import SimpleMemo from "../homeSections/SimpleMemo";
import Flip from "../three/Flip";
import { useSelector } from "react-redux";

const Home: React.FC<HomePropType> = ({}) => {
  const HomeRef = useRef<any>(null);
  const { animationEnd } = useSelector(
    (state: ReduxStateType): setAnimationStateType => state.setAnimation
  );

  return (
    <div ref={HomeRef} className={classNames(styles.container)}>
      <Front />
      {!animationEnd && <Flip />}
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
