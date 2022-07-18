import { useState } from "react";

import { Spring, animated, useSpring, config, useTrail } from "react-spring";
import { BsGrid } from "react-icons/bs";
import { VscFlame } from "react-icons/vsc";

import styles from "../styles/Home.module.css";
import PatternSVG from "../comps/anim/PatternSVG";

export default function Home() {
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
            {/* <Wave numWaves={4} /> */}
          </div>
          <PatternSVG />

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
