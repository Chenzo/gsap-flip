import styles from "./GSAPTest2.module.scss";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Flip from "gsap/Flip";

gsap.registerPlugin(Flip);

export default function GSAPTest2() {
  
    gsap.registerPlugin(Flip);
    const [callout, setCallout] = useState("");
    const [styleType, setStyleType] = useState(styles.plain);



    const container = useRef();
    const letter = useRef([]);
    const [flip, setFlip] = useState(false);

    const toggleIt = () => {
        console.log("toggleIt");
        setFlip(!flip)
    }

    useEffect(() => {
        const state = Flip.getState(letter.current, {
            props: "backgroundColor, color, fontSize"
        });
    
        if (flip) {
            container.current.classList.remove(styles.plain);
            container.current.classList.add(styles.tall);
        } else {
            container.current.classList.add(styles.plain);
            container.current.classList.remove(styles.tall);
        }

        Flip.from(state, {
            duration: 1,
            stagger: 0.1,
            ease: "power1.inOut",
            //onEnter: elements => gsap.fromTo(elements, {opacity: 0, scale: 0}, {opacity: 1, scale: 1, duration: 1}),
            //onLeave: elements => gsap.to(elements, {opacity: 0, scale: 0, duration: 1})
          });
    
      }, [flip]);
 
  return (
        <>
        <button className={styles.button} onClick={toggleIt}>toggle</button>

            <div className={styles.amimationHolder}>

                <div ref={container} className={`${styles.container} ${styles.plain}`}>
                    <div ref={(el) => (letter.current[0] = el)}  className={`${styles.letter} ${styles.c}`}>C</div>
                    <div ref={(el) => (letter.current[1] = el)} className={`${styles.letter} ${styles.h}`}>H</div>
                    <div ref={(el) => (letter.current[2] = el)} className={`${styles.letter} ${styles.e}`}>E</div>
                    <div ref={(el) => (letter.current[3] = el)} className={`${styles.letter} ${styles.n}`}>N</div>
                    <div ref={(el) => (letter.current[4] = el)} className={`${styles.letter} ${styles.z}`}>Z</div>
                    <div ref={(el) => (letter.current[5] = el)} className={`${styles.letter} ${styles.o}`}>O</div>
                </div>

            </div>

        </>
  );
}