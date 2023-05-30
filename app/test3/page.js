"use client"; 

import Head from 'next/head';
import styles from "./test3.module.scss";
import GSAPTest2 from '@/components/GSAPTest2';


export default function PageThree() {

  return (
    <main className={styles.main}>
      <Head>
        <title>Test 3</title>
      </Head>
    
      <GSAPTest2 />

    </main>
  )
}
