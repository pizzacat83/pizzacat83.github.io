import React, { CSSProperties } from "react";
import BaseImg from "./base.inline.svg";
import EyesImg from "./eyes.inline.svg";
import MouthImg from "./mouth.inline.svg";
import styles from "./styles.module.scss";

interface SpinnerConfig {
  size: string;
  rotate?: {
    face?: boolean;
    mouth?: boolean;
  };
}

export const Spinner = ({ size, rotate = {} }: SpinnerConfig) => (
  <div className={styles.container} style={{ height: size }}>
    <div className={rotate.face ?? true ? styles.face_rotate : styles.face}>
      <div className={rotate.mouth ?? true ? styles.mouth_outer_rotate : styles.mouth_outer}>
        <MouthImg className={styles.mouth} />
        <MouthImg className={styles.mouth2} />
      </div>
      <EyesImg className={styles.eyes} />
      <BaseImg className={styles.base} />
    </div>
  </div>
);

export const SpinnerContainer =
  ({ spinnerConfig, style = {} }: { spinnerConfig: SpinnerConfig; style: CSSProperties }) => (
    <div className={styles.outer} style={style}>
      <Spinner {...spinnerConfig} />
    </div>
  );
