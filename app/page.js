
"use client"; 

import styles from './page.module.css'
import Script from 'next/script';
import Head from 'next/head';
import { useEffect, useState } from "react";

import GSAPTest1 from '@/components/GSAPTest1';

export default function Home() {


  const [gaspLoaded, setGaspLoaded] = useState(false);
  const [flipLoaded, setFlipLoaded] = useState(false);
  

  useEffect(() => {
    console.log("checking");
    if (gaspLoaded && flipLoaded) {
      console.log("window.gsap.registerPlugin(Flip);");
      window.gsap.registerPlugin(Flip);
    }
  }, [gaspLoaded, flipLoaded]);

  return (
    <main className={styles.main}>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js"
        strategy="lazyOnload"
        onLoad={() => setGaspLoaded(true)
        }
      />

      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/Flip.min.js"
        strategy="lazyOnload"
        onLoad={() => setFlipLoaded(true)
        }
      />


      <h1>GSAP Tests</h1>

      <div className={styles.testspace}>
          <GSAPTest1 />
      </div>


    </main>
  )
}
