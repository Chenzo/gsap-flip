import styles from "./GSAPTest0.module.scss";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Flip from "gsap/Flip";

export default function GSAPTest0() {
  
    gsap.registerPlugin(Flip);
    const [changeFlex, setChangeFlex] = useState(false);
    //const [callout, setCallout] = useState("");
   // const [styleType, setStyleType] = useState(styles.plain);
    //const container = useRef();

    const [animatedClass, setAminatedClass] = useState("");
 
    const buttonClick = () => {
        console.log("Button Press");

        const state = Flip.getState(`.${styles.group}, .${styles.box}`);
        console.log(state);

        setChangeFlex(!changeFlex);
        setAminatedClass(changeFlex ? styles.reorder : "");

        Flip.from(state, {
            absolute: true, // uses position: absolute during the flip to work around flexbox challenges
            duration: 0.5, 
            stagger: 0.1,
            ease: "power1.inOut"
            // you can use any other tweening properties here too, like onComplete, onUpdate, delay, etc. 
          });
    }
    

  return (
       <div>

            <h1>Smoothly change flex direction with GSAP's Flip plugin - REACT</h1>
            <h5>this fails for reasons I don't yet understand</h5>

            <button id="changeLayout" className={styles.button} onClick={buttonClick}>change! </button>

            {/* <div className={`${styles.group} ${changeFlex ? styles.reorder : ""}`}> */}
            <div className={`${styles.group} ${animatedClass}`}>
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