import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Destaque from '../components/Destaque'
import Galeria from '../components/Galeria'
import Header from '../components/Header'
export interface Filme{
  
  id: number,
  backdrop_path: string,
  original_title: string,
  overview: string,
  popularity: number
  
}
export interface ListaFilme{
  listaFilme: Filme[]
}

export default function Home({listaFilme} : ListaFilme) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Movie</title>
        <meta name="description" content="Todos os tipos fimes " />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Lexend+Deca&display=swap" rel="stylesheet" />
      </Head>
      <Header />
      <main className={styles.containerMain}>
        <Destaque listaFilme={listaFilme}/>
        <Galeria listaFilme={listaFilme} />
        
      </main>
      
    </div>
  )
}

export async function getStaticProps(){

  const response = await fetch('https://api.themoviedb.org/4/list/1?api_key=4e9cbdb6188d564ab3062e486d67953a')

 const dado = await response.json()
 return {
     props:{listaFilme:dado.results}
 }
}
