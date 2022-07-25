import React, { useRef } from "react";
import styles from "./Home.module.scss";
import classNames from "classnames";
import { HomePropType } from "../types";
import Section from "../components/Section";
import Front from "../components/Front";
import paletteVault from "../sections/paletteVault";
import RareBeef from "../components/RareBeef";
import placeReview from "../sections/placeReview";
import ReactNative from "../components/ReactNative";
import metaBeef from "../sections/metaBeef";
import memoryTest from "../sections/memoryTest";
import simpleMemo from "../sections/simpleMemo";
import clock from "../sections/clock";
import HomeHelmet from "../helmets/HomeHelmet";

const Home: React.FC<HomePropType> = () => {
  const HomeRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={HomeRef} className={classNames(styles.container)}>
      <HomeHelmet />
      <Front />
      <div className={styles.contour} />
      <RareBeef />
      <Section data={paletteVault} />
      <Section data={placeReview} />
      <ReactNative />
      <Section data={metaBeef} />
      <Section data={memoryTest} />
      <Section data={simpleMemo} />
      <Section data={clock} />
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()}. RAREBEEF All Rights Reserved.
      </footer>
    </div>
  );
};

export default Home;
