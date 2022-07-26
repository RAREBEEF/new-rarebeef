import { useEffect, useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import BeefModel from "../models/BeefModel";
import { BeefPropType } from "../types";
import gsap from "gsap";
import angleToRadians from "../tools/angleToRadians";
import PlateModel from "../models/PlateModel";
import useCalcScroll from "../hooks/useCalcScroll";

const Beef: React.FC<BeefPropType> = ({ sectionRef, setText }) => {
  const calcScroll = useCalcScroll(sectionRef);
  const [scale, setScale] = useState<number>(
    ((window.innerWidth - 300) / 1200) * 0.3 + 0.7
  );
  const controlRef = useRef<any>(null);
  const groupRef = useRef<any>(null);
  const beefRef = useRef<any>(null);
  const plateRef = useRef<any>(null);
  const lightRef = useRef<any>(null);

  useEffect((): void => {
    if (!controlRef.current || !beefRef.current) {
      return;
    }

    const control = controlRef.current;
    const beef = beefRef.current;

    control.enableZoom = false;
    control.enablePan = false;
    control.enableRotate = false;
    control.reverseOrbit = false;
    control.object.position.x = 0;
    control.object.position.y = 10;
    control.object.position.z = 20;
    beef.position.y = 30;
  }, []);

  useEffect(() => {
    const windowScrollListner = () => {
      if (
        !sectionRef.current ||
        !controlRef.current ||
        !groupRef.current ||
        !beefRef.current
      ) {
        return;
      }

      const controlPos = controlRef.current.object.position;
      const beefPos = beefRef.current.position;
      const groupPos = groupRef.current.position;

      let scrollProgress = calcScroll(5);

      if (scrollProgress <= 0 || scrollProgress >= 1.9) {
        return;
      }

      if (scrollProgress >= 0.15 && scrollProgress < 0.3) {
        setText(1);
      } else if (scrollProgress >= 0.45 && scrollProgress < 0.6) {
        setText(2);
      } else if (scrollProgress >= 0.75 && scrollProgress < 0.9) {
        setText(3);
      } else if (scrollProgress >= 0.95 && scrollProgress < 1) {
        setText(4);
      } else if (scrollProgress >= 1) {
        setText(4);
        gsap.to(groupPos, 0.2, {
          x: 3.2,
          y: 0,
          z: 0,
        });
      } else {
        setText(0);
      }

      if (scrollProgress >= 0 && scrollProgress < 0.2) {
        scrollProgress *= 5;

        gsap.to(groupPos, 0.2, {
          x: 0,
          y: 0,
          z: 0,
        });
        gsap.to(controlPos, 0.2, {
          x: 0,
          y: 10,
          z: 20 - 5 * scrollProgress,
          ease: "linear",
        });
        gsap.to(beefPos, 0.2, {
          y: 30 - 10 * scrollProgress,
          ease: "linear",
        });
      } else if (scrollProgress >= 0.2 && scrollProgress < 0.4) {
        scrollProgress = (scrollProgress - 0.2) * 5;

        gsap.to(groupPos, 0.2, {
          x: 0,
          y: 0,
          z: 0,
        });
        gsap.to(controlPos, 0.2, {
          x: 0,
          y: 10,
          z: 15 - 5 * scrollProgress,
          ease: "linear",
        });
        gsap.to(beefPos, 0.2, {
          y: 20 - 10 * scrollProgress,
          ease: "linear",
        });
      } else if (scrollProgress >= 0.4 && scrollProgress < 0.6) {
        scrollProgress = (scrollProgress - 0.4) * 5;

        gsap.to(groupPos, 0.2, {
          x: 0,
          y: 0,
          z: 0,
        });
        gsap.to(controlPos, 0.2, {
          x: 0,
          y: 10 - 2 * scrollProgress,
          z: 10 - 5 * scrollProgress,
          ease: "linear",
        });
        gsap.to(beefPos, 0.2, {
          y: 10 - 5 * scrollProgress,
          ease: "linear",
        });
      } else if (scrollProgress >= 0.6 && scrollProgress < 0.8) {
        scrollProgress = (scrollProgress - 0.6) * 5;

        gsap.to(groupPos, 0.2, {
          x: 0,
          y: 0,
          z: 0,
        });
        gsap.to(controlPos, 0.2, {
          x: 0,
          y: 8 - 4 * scrollProgress,
          z: 5 - 5 * scrollProgress,
          ease: "linear",
        });
        gsap.to(beefPos, 0.2, {
          y: 5 - 5 * scrollProgress,
          ease: "linear",
        });
      } else if (scrollProgress >= 0.8 && scrollProgress <= 1) {
        scrollProgress = (scrollProgress - 0.8) * 5;

        gsap.to(groupPos, 0.2, {
          x: 0 + 3.2 * scrollProgress,
          y: 0,
          z: 0,
        });
        gsap.to(controlPos, 0.2, {
          x: 0,
          y: 4,
          z: 0,
          ease: "linear",
        });
        gsap.to(beefPos, 0.2, {
          y: 0,
          ease: "linear",
        });
      }
    };

    window.addEventListener("scroll", windowScrollListner);

    const windowResizeListner = () => {
      setScale(
        window.innerWidth < 300
          ? 0.7
          : window.innerWidth > 1500
          ? 1
          : ((window.innerWidth - 300) / 1200) * 0.3 + 0.7
      );
    };

    window.addEventListener("resize", windowResizeListner);

    return () => {
      window.removeEventListener("scroll", windowScrollListner);
      window.removeEventListener("resize", windowResizeListner);
    };
  }, [calcScroll, sectionRef, setText]);

  return (
    <group scale={scale}>
      <group ref={groupRef}>
        <BeefModel beefRef={beefRef} />
        <PlateModel plateRef={plateRef} />
        <spotLight
          args={["#fff", 1, 15, angleToRadians(140), 0, 0]}
          position={[0, 10, 3]}
          ref={lightRef}
          castShadow
        />
      </group>
      <OrbitControls ref={controlRef} />
      <ambientLight args={["#fff", 0.2]} />
    </group>
  );
};

export default Beef;
