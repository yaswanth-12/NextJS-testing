import Navbar from '../components/Navbar'
import Main from '../components/Main'
import styles from '../styles/main.module.css'
import Cards from '../components/Cards'

export default function Home() {
  return (
    <>
      <head>
        <title> Idk..... </title>
        <link rel="icon" href="https://yaswanth-12.github.io/NextJS-testing/favicon.ico" />
        <meta name="viewport" content="width=500, initial-scale=1" />
      </head>
      <main>
        <Navbar />
        <Main />
        <Cards />
      </main>

    </>
  )
}

