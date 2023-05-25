import styles from "./GSAPTest2.module.scss";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Flip from "gsap/Flip";

export default function GSAPTest1() {
  
    gsap.registerPlugin(Flip);
    const [callout, setCallout] = useState("");
    const container = useRef();

    const toggleIt = () => {
        console.log("toggleIt");
    }
 
  return (
        <>
            <div ref={container} className={`${styles.container} ${styles.tall}`}>
                <div className={`${styles.letter} ${styles.c}`}>C</div>
                <div className={`${styles.letter} ${styles.h}`}>H</div>
                <div className={`${styles.letter} ${styles.e}`}>E</div>
                <div className={`${styles.letter} ${styles.n}`}>N</div>
                <div className={`${styles.letter} ${styles.z}`}>Z</div>
                <div className={`${styles.letter} ${styles.o}`}>O</div>
            </div>

            <button onClick={toggleIt}>toggle</button>
        </>
  );
}