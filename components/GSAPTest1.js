import styles from "./GSAPTest1.module.scss";
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Flip from "gsap/Flip";

export default function GSAPTest1() {
  
    const [callout, setCallout] = useState("");
    const square = useRef();
    const circle = useRef();
    const spinBox = useRef();
    gsap.registerPlugin(Flip);
    const squares = gsap.utils.toArray(square.current);  


    function doFlip() {
        // Get the initial state
        const state = Flip.getState(squares);
        console.log(state);
        swap(squares);
        Flip.from(state, {duration: 2, ease: "power1.inOut"});
    }

    function swap(thing) {
        return thing.reverse();
    }

    /* function swap([a, b]) {
        a.parentNode.children[0] === a ? a.parentNode.appendChild(a) : a.parentNode.appendChild(b);
    } */

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, { backgroundColor: "#e77614", scale: 1.2 });
    };
      
      const onLeave = ({ currentTarget }) => {
        gsap.to(currentTarget, { backgroundColor: "#28a92b", scale: 1 });
    };

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
          // use scoped selectors
          gsap.to(".box", { rotation: 360 });
          // or refs
          gsap.to(circle.current, { rotation: 360 });
          
        }, spinBox);
        
        return () => ctx.revert();
      }, []);

    useEffect(() => {
        console.log("ready");  
        //document.addEventListener("click", doFlip);
    }, []);
 
  return (
        <>
            <div className={styles.container}>
                <div className={styles.square} ref={square} id="sq1">1</div>
                <div className={styles.square} ref={square} id="sq2">2</div>
            </div>


            <div className={styles.box} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                Hover Me
            </div>


            <div ref={spinBox} className={styles.spinBox}>
                <div className={`${styles.boxy} box`}>selector</div>
                <div className={styles.circle} ref={circle}>Ref</div>
            </div>
        </>
  );
}