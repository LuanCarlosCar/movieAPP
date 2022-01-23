import { ListaFilme } from "../../pages";
import { ContainerConteudo, ContainerImg, ContainerLista, ContainerDetalhe, TextDetalhe, TextPopularity, Textdescription, BtnLink, ContainerGaleria, ContainerSegundaLista, CardFilmeGaleria, ContainerTitleGaleria, CardFilmeGaleria2, ContainerGaleria2, ContainerGrid } from './styled';



export default function Galeria({listaFilme, listaFilme2 }: ListaFilme ) {
    const url_img = 'https://image.tmdb.org/t/p/w500'
    const item2 = listaFilme.slice(11,14)
    const item3 = listaFilme2.slice(0,9)
    return(
        <ContainerGaleria>
            <ContainerGrid>
                <ContainerLista>
                {listaFilme.map((filme)=>(
                    <ContainerConteudo key={filme.id}>
                        <ContainerImg fundo={url_img + filme.backdrop_path} src={url_img + filme.backdrop_path} />
                        <ContainerDetalhe>
                            <TextDetalhe>{filme.original_title}</TextDetalhe>
                            <Textdescription>{filme.overview}</Textdescription>
                            <TextPopularity>{filme.popularity}</TextPopularity>
                            <BtnLink href="#">Ver filme</BtnLink>
                        </ContainerDetalhe>
                    </ContainerConteudo>

                    ))}

                </ContainerLista>
            
            <ContainerSegundaLista>
                    <ContainerTitleGaleria>Lorem ipsum</ContainerTitleGaleria>
                    <ul>
                    {item2.map((filme)=>(
                        <CardFilmeGaleria key={filme.id} fundo={url_img + filme.backdrop_path}><span>Status</span> <p>{filme.original_title}</p></CardFilmeGaleria>
                    ))}
                    </ul>
            </ContainerSegundaLista>
            </ContainerGrid>

            <ContainerTitleGaleria>Lorem ipsum</ContainerTitleGaleria>
                    <ContainerGaleria2>
                    {item3.map((filme)=>(
                        <CardFilmeGaleria2 key={filme.id} fundo={url_img + filme.backdrop_path}><span>Status</span> <p>{filme.original_title}</p></CardFilmeGaleria2>
                    ))}
                    </ContainerGaleria2>
        </ContainerGaleria>
    )
}