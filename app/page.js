
"use client"; 

import styles from './page.module.css'
import Script from 'next/script';
import Head from 'next/head';
import { useEffect, useState } from "react";

import GSAPTest1 from '@/components/GSAPTest1';
import GSAPTest2 from '@/components/GSAPTest2';

export default function Home() {


  /* const [gaspLoaded, setGaspLoaded] = useState(false);
  const [flipLoaded, setFlipLoaded] = useState(false);
  

  useEffect(() => {
    console.log("checking");
    if (gaspLoaded && flipLoaded) {
      console.log("window.gsap.registerPlugin(Flip);");
      window.gsap.registerPlugin(Flip);
    }
  }, [gaspLoaded, flipLoaded]); */

  return (
    <main className={styles.main}>
      <Head>
        <title>First Post</title>
      </Head>
      

      <h1>GSAP Tests</h1>

      <div className={styles.testspace}>
          <GSAPTest1 />

          <GSAPTest2 />
      </div>


    </main>
  )
}
