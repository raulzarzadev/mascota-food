import Head from 'next/head'
import Footer from '../src/components/Footer'
import Header from '../src/components/Header/Header'

import styles from '../styles/Home.module.css'
import Hero from '../src/components/Hero/Hero'
import Description from '../src/components/Description/Description'
import Products from '../src/components/Products/Products'
import Location from '../src/components/Location/Location'
import Socials from '../src/components/Socials'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>MASCOTA FOOD</title>
        <meta
          name="description"
          content=" En Mascota Food encuentras todo lo que necesitas para consentir a tu mascota, las mejores marcas al mejor precio, ven a conocernos."
        ></meta>
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
        <Socials />
        <Description />
        {/* <Products /> */}
        <Location />
      </main>
      <Footer />
    </div>
  )
}
