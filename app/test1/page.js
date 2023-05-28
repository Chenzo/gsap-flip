"use client"; 

import Head from 'next/head';
import styles from './test1.module.scss'
import GSAPTest0 from '@/components/GSAPTest0';

export default function Home() {


  return (
    <main className={styles.main}>
      <Head>
        <title>Test 0</title>
      </Head>
    
        <GSAPTest0 />
    </main>
  )
}
