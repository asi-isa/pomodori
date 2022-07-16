import { useState } from "react";

import { Spring, animated, useSpring, config } from "react-spring";
import { BsGrid } from "react-icons/bs";
import { VscFlame } from "react-icons/vsc";

import styles from "../styles/Home.module.css";

export default function Home() {
  const waveAnim = {
    from: {
      opacity: 1,
      width: 50,
      height: 50,
      border: "3px solid white",
    },
    to: {
      opacity: 0,
      width: 400,
      height: 400,
      border: "20px solid white",
    },
    loop: true,
    config: { duration: 7000 },
  };

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
            {Array.from([300, 500, 700]).map((delay) => {
              return (
                <animated.div
                  className={styles.circle_fade}
                  style={useSpring({ ...waveAnim, delay })}
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
