import Head from 'next/head';

import style from '../styles/home.module.scss';

export default function Home() {
  return (
    <h1 className={style.title}>
      <Head>
        <title>Inicio | ig.news</title>
      </Head>

      Hello <span>world</span>!
    </h1>
  )
}
