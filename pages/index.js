import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home ({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>30/11</title>
        <meta
          name='description'
          content='El muro de webs de un nacido el 30 del 11'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>30/11</h1>
      <main className={styles.main}>
        <div className={styles.cont}>
          <h2>Muro de sitios</h2>
          {data.map((dat) => {
            return (
              <div key={dat.link}>
                <a target='_BLANK' rel='noreferrer noopener' href={dat.link}>
                  {dat.name}
                </a>
                <hr />
                <h3>{dat.desc}</h3>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps () {
  const res = await fetch('https://3011.site/api/sites')
  const data = await res.json()
  return {
    props: {
      data
    }
  }
}
