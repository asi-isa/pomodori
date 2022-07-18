import React, { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import styles from "./PatternSVG.module.css";

interface PatternProps {
  x: string;
  y: string;
  width: string;
  height: string;
  transform: string;
}

interface AnimatedPatternProps extends PatternProps {
  animate: boolean;
}

function Pattern({
  animate,
  x,
  y,
  width,
  height,
  transform,
}: AnimatedPatternProps) {
  const [toggle, setToggle] = useState(false);

  const [pathLength, setPathLength] = useState(null);

  const animatedStyle = useSpring({
    from: {
      strokeDashoffset: pathLength,
      strokeDasharray: pathLength,
      opacity: 0,
    },
    to: {
      strokeDashoffset: 0,
      strokeDasharray: pathLength,
      opacity: 1,
    },
    // boxShadow: toggle ? "0 0 5px 50px white" : "0 0 0 0",
    config: { duration: 21000 },
    loop: { reverse: true, delay: 500 },
    reverse: true,
  });

  function getTotalLength(ref: SVGRectElement): void {
    if (ref) setPathLength(ref.getTotalLength());
  }

  return (
    <>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        transform={transform}
        rx="2.5"
        stroke="rgba(255,255,255,0.1)"
      />
      <animated.rect
        x={x}
        y={y}
        width={width}
        height={height}
        transform={transform}
        rx="2.5"
        stroke="white"
        style={animatedStyle}
        ref={getTotalLength}
      />
    </>
  );
}

export default function PatternSVG() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(true);
  }, []);

  const patternProps: PatternProps[] = [
    {
      x: "0.525483",
      y: "-0.473147",
      width: "579",
      height: "579",
      transform: "matrix(0.99863 0.052336 0.052336 -0.99863 0.0254828 578.8)",
    },
    {
      x: "0.549525",
      y: "-0.444997",
      width: "559.6",
      height: "559.6",
      transform:
        "matrix(0.994522 0.104528 0.104528 -0.994522 0.0495252 556.584)",
    },
    {
      x: "0.572061",
      y: "-0.415627",
      width: "540",
      height: "540",
      transform:
        "matrix(0.987688 0.156434 0.156434 -0.987688 0.0720614 533.581)",
    },
    {
      x: "0.59303",
      y: "-0.385118",
      width: "521",
      height: "521",
      transform:
        "matrix(0.978148 0.207912 0.207912 -0.978148 0.0930297 510.713)",
    },
    {
      x: "0.612372",
      y: "-0.353553",
      width: "503",
      height: "503",
      transform: "matrix(0.965926 0.258819 0.258819 -0.965926 2.11237 488.829)",
    },
    {
      x: "0.525483",
      y: "40.828",
      width: "579",
      height: "579",
      transform: "rotate(-3 0.525483 40.828)",
    },
    {
      x: "0.549525",
      y: "63.0437",
      width: "559.6",
      height: "559.6",
      transform: "rotate(-6 0.549525 63.0437)",
    },

    {
      x: "0.572061",
      y: "86.0467",
      width: "540",
      height: "540",
      transform: "rotate(-9 0.572061 86.0467)",
    },
    {
      x: "0.59303",
      y: "108.915",
      width: "521",
      height: "521",
      transform: "rotate(-12 0.59303 108.915)",
    },
    {
      x: "2.61237",
      y: "130.798",
      width: "503",
      height: "503",
      transform: "rotate(-15 2.61237 130.798)",
    },
  ];

  return (
    <svg
      viewBox="0 0 620 621"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.pattern}
    >
      {patternProps.map((patternProp, i) => (
        <Pattern key={i} animate={toggle} {...patternProp} />
      ))}
    </svg>
  );
}
