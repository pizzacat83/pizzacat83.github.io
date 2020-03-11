import React from 'react'
import spinnerBase from '../assets/spinner_base.svg';
import spinnerMouth from '../assets/spinner_mouth.svg';
import spinnerStyle from '../assets/spinner.module.css';

export default () => (
    <div className={spinnerStyle.spinner_outer}>
    <div className={spinnerStyle.spinner_container}>
        <img src={spinnerMouth} alt="" className={spinnerStyle.spinner_mouth}/>
        <img src={spinnerBase} alt="spinner" className={spinnerStyle.spinner_base}/>
    </div></div>
);
