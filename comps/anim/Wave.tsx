import React from "react";
import styles from "./Wave.module.css";

import { animated, config, useSpring, useTrail } from "react-spring";

interface WaveProps {
  numWaves: number;
}

export default function Wave({ numWaves }: WaveProps) {
  const waveAnim = useSpring({
    from: {
      opacity: 0.8,
      width: 100,
      height: 100,
      border: "3px solid white",
    },
    to: {
      opacity: 0,
      width: 600,
      height: 600,
      border: "20px solid white",
    },
    loop: { reverse: true },
    delay: 500,
    config: { ...config.gentle, duration: 7000 },
  });

  const trail = useTrail(numWaves, waveAnim);

  return (
    <>
      {trail.map((style, i) => {
        return (
          <animated.div key={i} className={styles.circle_fade} style={style} />
        );
      })}
    </>
  );
}
