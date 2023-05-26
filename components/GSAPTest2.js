import styles from "./GSAPTest2.module.scss";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Flip from "gsap/Flip";

export default function GSAPTest1() {
  
    gsap.registerPlugin(Flip);
    const [callout, setCallout] = useState("");
    const [styleType, setStyleType] = useState(styles.plain);



    const container = useRef();
    const letter = useRef();
    const [isReorder, setisReorder] = useState(false);

    const toggleIt = () => {
        console.log("toggleIt");
        const state = Flip.getState(container.current, letter.current);
        setStyleType(styleType === styles.plain ? styles.tall : styles.plain);
        Flip.from(state, {
            absolute: true, // uses position: absolute during the flip to work around flexbox challenges
            duration: 1, 
            stagger: 0.1,
            ease: "power1.inOut"
            // you can use any other tweening properties here too, like onComplete, onUpdate, delay, etc. 
          });
    }


    const changeLayout = () => {
        console.log("changeLayout");

        
        const state = Flip.getState(".group, .box");
        setisReorder(!isReorder);
        Flip.from(state, {
            absolute: true, // uses position: absolute during the flip to work around flexbox challenges
            duration: 0.5, 
            stagger: 0.1,
            ease: "power1.inOut"
            // you can use any other tweening properties here too, like onComplete, onUpdate, delay, etc. 
          }); 
    }
 
  return (
        <>
        <button className={styles.button} onClick={toggleIt}>toggle</button>

            <div ref={container} className={`${styles.container} ${styleType}`}>
                <div ref={letter} className={`${styles.letter} ${styles.c}`}>C</div>
                <div ref={letter} className={`${styles.letter} ${styles.h}`}>H</div>
                <div ref={letter} className={`${styles.letter} ${styles.e}`}>E</div>
                <div ref={letter} className={`${styles.letter} ${styles.n}`}>N</div>
                <div ref={letter} className={`${styles.letter} ${styles.z}`}>Z</div>
                <div ref={letter} className={`${styles.letter} ${styles.o}`}>O</div>
            </div>

            

            <button id="changeLayout" className={styles.button} onClick={changeLayout}>change</button>
            <div className={`group ${styles.group} ${isReorder ? styles.reorder : ""}`}>
                <div className={`box ${styles.box}`}>Common "FLIP" techniques employed by other tools won't work with flex elements because of the way browsers handle width/height. 
                </div>
                <div className={`box ${styles.box}`}>Simply set <code>absolute: true</code> to have GSAP's Flip plugin make the elements position: absolute during the flip to work around challenges with flex and grid layouts. 
                </div>
                <div className={`box ${styles.box}`}>When the flip animation is done, elements get reverted back to their normal positioning and everything appears seamless.</div>
                <div className={`box ${styles.box}`}>Happy flipping!</div>
            </div>
        </>
  );
}