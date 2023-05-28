"use client"; 

import Head from 'next/head';
import styles from './test2.module.scss'
import { useEffect, useState, useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Flip from "gsap/Flip";

gsap.registerPlugin(Flip);

const elementsData = [
  {
    "id": "66dccd6b45fab529c10583c7eabd974c",
    "type": "green",
    "class": styles.green,
  }, {
    "id": "19f15869ca42ec22e3af68748c358f2e",
    "type": "green",
    "class": styles.green,
  }, {
    "id": "7abb9ed363c90128d0ddd6d9b687e771",
    "type": "orange",
    "class": styles.orange,
  }, {
    "id": "5162114a285af56bcae3440d8afb8917",
    "type": "purple",
    "class": styles.purple,
  }, {
    "id": "e44ba992c2c8ad38fde8c04bbe1d7d3c",
    "type": "orange",
    "class": styles.orange,
  }, {
    "id": "dbe6edd40feaa3cd75d83c750a302f22",
    "type": "purple",
    "class": styles.purple,
  }, {
    "id": "64c0105243f140438d1ffe9d03ca0463",
    "type": "orange",
    "class": styles.orange,
  }, {
    "id": "f6dd49fd8df050dee4f763b56c1a1fac",
    "type": "orange",
    "class": styles.orange,
  }, {
    "id": "d301edb5066bb1f000a626df1a2aab1e",
    "type": "green",
    "class": styles.green,
  }, {
    "id": "481c393926c852245242104aa746664e",
    "type": "green",
    "class": styles.green,
  }
];


export default function FilterTest() {


  let filterArray = [
    "green",
    "orange",
    "purple"
  ];

  const [filter, setFilter] = useState(filterArray);
  const elementRefs = useRef([]);

  const filterChangeHandler = (e) => {
    const { checked, value } = e.target;

      if (checked) {
        setFilter([].concat(filter, value));
      } else {
        setFilter(filter.filter(e => e !== value));
      }
  }

  useEffect(() => {

    console.log('filter changed');
    const state = Flip.getState(elementRefs.current);

    if (elementRefs) {
      elementRefs.current.forEach((el) => {
        el.style.display = filter.indexOf(el.dataset.color) === -1 ? "none" : "inline-flex";
      }); 
    }
    Flip.from(state, {
      duration: 1,
      scale: true,
      absolute: true,
      ease: "power1.inOut",
      onEnter: elements => gsap.fromTo(elements, {opacity: 0, scale: 0}, {opacity: 1, scale: 1, duration: 1}),
      onLeave: elements => gsap.to(elements, {opacity: 0, scale: 0, duration: 1})
    });

  }, [filter]);



  return (
    <main className={styles.main}>
      <Head>
        <title>Test 2 - Filters</title>
      </Head>
    

      <h1>Filter Test</h1>

      <div className={styles.filterContainer}>
        <label className="form-check-label" htmlFor={"orange"}>
          <input
            className="form-check-input"
            type="checkbox"
            value="orange"
            id="orange"
            checked={filter.indexOf("orange") > -1}
            onChange={filterChangeHandler}
          />
          Orange
        </label>

        <label className="form-check-label" htmlFor={"green"}>
          <input
            className="form-check-input"
            type="checkbox"
            value="green"
            id="green"
            checked={filter.indexOf("green") > -1}
            onChange={filterChangeHandler}
          />
          Green
        </label>

        <label className="form-check-label" htmlFor={"purple"}>
          <input
            className="form-check-input"
            type="checkbox"
            value="purple"
            id="purple"
            checked={filter.indexOf("purple") > -1}
            onChange={filterChangeHandler}
          />
          Purple
        </label>
      </div>

      <div className={styles.boxContainer}>

        {elementsData.map((e, i) => {
          //if (filter.indexOf(e.type) > -1) { //can't remove them, have to make them display none.
            return(
              <div className={`${styles.filter_element} ${e.class}`} 
                    ref={(el) => (elementRefs.current[i] = el)} 
                    key={e.id}
                    data-color={e.type}>BOX</div>
            )
          //}
        })}


        </div>

    </main>
  )
}
