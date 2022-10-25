import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>30/11</h1>
        <div className={styles.cont}>
          <h2>Sites</h2>
          <div>
            <a
              target="_BLANK"
              rel="noreferrer noopener"
              href="https://3011.site"
            >
              3011
            </a>
            <hr />
            <h3>Muro de proyectos</h3>
          </div>
          <div>
            <a
              target="_BLANK"
              rel="noreferrer noopener"
              href="https://creal.es"
            >
              CReal
            </a>
            <hr />
            <h3>Conectar a los jovenes de Ciudad real</h3>
          </div>
          <div>
            <a
              target="_BLANK"
              rel="noreferrer noopener"
              href="https://tonyashoes.creal.store"
            >
              Tonyashoes (CReal)
            </a>
            <hr />
            <h3>Tienda de zapatos personalizables (3D)</h3>
          </div>
          <div>
            <a
              target="_BLANK"
              rel="noreferrer noopener"
              href="https://creal.store"
            >
              CReal Store
            </a>
            <hr />
            <h3>portal de tiendas de Ciudad real</h3>
          </div>
          <div>
            <a
              target="_BLANK"
              rel="noreferrer noopener"
              href="https://tonias.creal.store"
            >
              Tonias
            </a>
            <hr />
            <h3>Tienda de ropa administrada en CReal Store</h3>
          </div>
        </div>
      </main>
    </div>
  );
}
