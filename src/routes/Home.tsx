import React, { useRef, useState } from "react";
import ThreeBeef from "../homeSections/ThreeBeef";
import Front from "../homeSections/Front";
import styles from "./Home.module.scss";
import PlaceReview from "../homeSections/PlaceReview";
import MetaBeef from "../homeSections/MetaBeef";
import classNames from "classnames";
import Toolbar from "../components/Toolbar";
import Nav from "../components/Nav";

const Home = () => {
  const HomeRef = useRef<any>(null);
  const [scrollMod, setScrollMod] = useState<boolean>(true);

  return (
    <div ref={HomeRef} className={classNames(styles.container)}>
      <Toolbar HomeRef={HomeRef} setScrollMod={setScrollMod} />
      {/* Empty space for scroll */}
      <Front />
      <ThreeBeef scrollMod={scrollMod} setScrollMod={setScrollMod} />
      <PlaceReview />
      <MetaBeef />
    </div>
  );
};

export default Home;
