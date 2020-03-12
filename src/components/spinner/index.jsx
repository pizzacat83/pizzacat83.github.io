import React from "react";
import spinnerBase from "./spinner_base.svg";
import spinnerMouth from "./spinner_mouth.svg";
import spinnerStyle from "./spinner.module.css";

export const Spinner = ({ size }) => (
  <div className={spinnerStyle.spinner_container} style={{ height: size }}>
    <img src={spinnerMouth} alt="" className={spinnerStyle.spinner_mouth} />
    <img src={spinnerBase} alt="spinner" className={spinnerStyle.spinner_base} />
  </div>
);

export const SpinnerContainer = ({ spinnerSize, style = {} }) => (
  <div className={spinnerStyle.spinner_outer} style={style}>
    <Spinner size={spinnerSize} />
  </div>
);
