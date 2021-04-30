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
        <link rel="icon" href="/LogoMascotaFoodSigno.gif" />
        {/* --- GOOGLE FONTS ---- */}
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Capriola&family=Montserrat:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main className={styles.main}>
        <Hero />
        <Description />
        {/* <Products /> */}
       <Location/>
      </main>
      <Footer />
    </div>
  )
}
