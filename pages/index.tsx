import { useState } from "react";

import { Spring, animated, useSpring, config, useTrail } from "react-spring";
import { BsGrid } from "react-icons/bs";
import { VscFlame } from "react-icons/vsc";

import styles from "../styles/Home.module.css";

export default function Home() {
  const waveAnim = useSpring({
    from: {
      opacity: 1,
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

  const trail = useTrail(3, waveAnim);

  return (
    <main className={styles.main}>
      <div className={styles.main_border}>
        <nav className={styles.nav}>
          <h1 className={styles.title}>pomodori</h1>
          <div className={styles.menu}>
            <BsGrid size={33} />
          </div>
        </nav>

        <div className={styles.pomodori_con}>
          <div className={styles.pomodori}>
            33:33
            {trail.map((style, i) => {
              return (
                <animated.div
                  key={i}
                  className={styles.circle_fade}
                  style={style}
                />
              );
            })}
          </div>

          <div className={styles.btns}>
            <div className={styles.btn}>STOP</div>
            <div className={styles.btn}>RESTART</div>
          </div>
        </div>

        <div className={styles.footer}>
          <p className={styles.footer_txt}>
            made with <VscFlame /> by
          </p>
          <p className={styles.footer_txt}> isatech.tech</p>
        </div>
      </div>
    </main>
  );
}
