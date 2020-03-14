import React, { CSSProperties } from "react";
import baseImg from "./base.svg";
import eyesImg from "./eyes.svg";
import mouthImg from "./mouth.svg";
import styles from "./styles.module.css";

interface SpinnerConfig {
  size: string;
  rotate?: boolean;
}

export const Spinner = ({ size, rotate = true }: SpinnerConfig) => (
  <div className={styles.container} style={{ height: size }}>
    <div className={rotate ? styles.face_rotate : styles.face}>
      <div className={styles.mouth_outer}>
        <img src={mouthImg} alt="" className={styles.mouth} />
        <img src={mouthImg} alt="" className={styles.mouth2} />
      </div>
      <img src={eyesImg} alt="" className={styles.eyes} />
      <img src={baseImg} alt="spinner" className={styles.base} />
    </div>
  </div>
);

export const SpinnerContainer =
  ({ spinnerConfig, style = {} }: { spinnerConfig: SpinnerConfig; style: CSSProperties }) => (
    <div className={styles.outer} style={style}>
      <Spinner {...spinnerConfig} />
    </div>
  );
