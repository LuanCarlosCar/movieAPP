import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Destaque from '../components/Destaque'
import Footer from '../components/Footer'
import Galeria from '../components/Galeria'
import Header from '../components/Header'
import Menu from '../components/Menu'
export interface Filme{
  
  id: number,
  backdrop_path: string,
  original_title: string,
  overview: string,
  popularity: number
  
}
export interface ListaFilme{
  listaFilme: Filme[],
  listaFilme2?: Filme[],
}

export default function Home({listaFilme, listaFilme2} : ListaFilme) {
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
      <Menu />
      <Header />
      <main className={styles.containerMain}>
     
        <Destaque listaFilme={listaFilme}/>
        <Galeria listaFilme={listaFilme} listaFilme2={listaFilme2} />
        <Footer />
      </main>
      
      
    </div>
  )
}

export async function getStaticProps(){

  const response = await fetch('https://api.themoviedb.org/4/list/1?api_key=4e9cbdb6188d564ab3062e486d67953a')
  const response2 = await fetch('https://api.themoviedb.org/4/list/3?api_key=4e9cbdb6188d564ab3062e486d67953a')

 const dado = await response.json()
 const dado2 = await response2.json()
 return {
     props:{listaFilme:dado.results, listaFilme2: dado2.results}
 }
}

