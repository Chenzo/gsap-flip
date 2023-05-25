import styles from "./GSAPTest1.module.css";
import { useEffect, useState, useRef } from "react";

export default function GSAPTest1() {
  
const [callout, setCallout] = useState("");


/* const squares = window.gsap.utils.toArray(".square");

function doFlip() {
  // Get the initial state
  const state = Flip.getState(squares);
  
  // Make DOM or styling changes (swap the squares in our case)
  swap(squares);
  
  // Animate from the initial state to the end state
  Flip.from(state, {duration: 2, ease: "power1.inOut"});
}

// Given an Array of two siblings, append the one that's first so it's last (swap)
function swap([a, b]) {
  a.parentNode.children[0] === a ? a.parentNode.appendChild(a) : a.parentNode.appendChild(b);
} */


  useEffect(() => {
    console.log("ready");    
    // click anywhere to flip
    //document.addEventListener("click", doFlip);
        
        /* const wait = setTimeout(() => {
            console.log("HERE WE ARE");
            window.gsap.registerPlugin(Flip);
        }, 2000); */
    }, []);
 
  return (

        <div className={styles.container}>
            <div className={styles.square} id="sq1">1</div>
            <div className={styles.square} id="sq2">2</div>
        </div>
  );
}