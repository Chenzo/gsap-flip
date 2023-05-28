import styles from "./GSAPTest0.module.scss";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Flip from "gsap/Flip";

export default function GSAPTest0() {
  
    gsap.registerPlugin(Flip);
    //const [callout, setCallout] = useState("");
   // const [styleType, setStyleType] = useState(styles.plain);
    //const container = useRef();
 
  return (
       <div>

            <h1>Smoothly change flex direction with GSAP's Flip plugin - REACT</h1>

            <button id="changeLayout" className={styles.button}>change! </button>

            <div className={styles.group}>
                <div className={styles.box}>
                    Common "FLIP" techniques employed by other tools won't work with flex elements because of the way browsers handle width/height. 
                </div>
                <div className={styles.box}>
                    Simply set <code>absolute: true</code> to have GSAP's Flip plugin make the elements position: absolute during the flip to work around challenges with flex and grid layouts. 
                </div>
                <div className={styles.box}>
                    When the flip animation is done, elements get reverted back to their normal positioning and everything appears seamless.
                </div>
                <div className={styles.box}>
                    Happy flipping!
                </div>
            </div>

       </div>
  );
}