import Head from 'next/head'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header/Header'

import styles from '../styles/Home.module.css'
import Hero from '../src/components/Hero/Hero'
import Description from '../src/components/Description/Description'
import Products from '../src/components/Products/Products'
import Location from '../src/components/Location/Location'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className={styles.main}>
        <Hero/>
        <Description/>
        <Products/>
       {/* <Location/> */}
      </main>
      <Footer/>
    </div>
  )
}
