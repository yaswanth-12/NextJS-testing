import Navbar from '../components/Navbar'
import Main from '../components/Main'
import styles from '../styles/main.module.css'
import Cards from '../components/Cards'
import {Head} from 'next/document'

export default function Home() {
  return (
    <>
      <Head>
          <link rel="icon" href="https://yaswanth-12.github.io/NextJS-testing/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Navbar />
        <Main />
        <Cards />
      </main>
    </>
  )
}

