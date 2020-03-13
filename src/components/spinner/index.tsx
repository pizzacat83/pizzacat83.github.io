import React, { CSSProperties } from "react";
import baseImg from "./base.svg";
import mouthImg from "./mouth.svg";
import styles from "./styles.module.css";

export const Spinner = ({ size }: { size: string }) => (
  <div className={styles.container} style={{ height: size }}>
    <div className={styles.mouth_outer}>
      <img src={mouthImg} alt="" className={styles.mouth} />
    </div>
    <img src={baseImg} alt="spinner" className={styles.base} />
  </div>
);

export const SpinnerContainer =
  ({ spinnerSize, style = {} }: { spinnerSize: string; style: CSSProperties }) => (
    <div className={styles.outer} style={style}>
      <Spinner size={spinnerSize} />
    </div>
  );
