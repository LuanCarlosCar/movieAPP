import { ListaFilme } from "../../pages";
import { ContainerConteudo, ContainerImg, ContainerLista, ContainerDetalhe, TextDetalhe, TextPopularity, Textdescription, BtnLink, ContainerGaleria, ContainerSegundaLista, CardFilmeGaleria, ContainerTitleGaleria } from './styled';



export default function Galeria({listaFilme }: ListaFilme ) {
    const url_img = 'https://image.tmdb.org/t/p/w500'
    const item2 = listaFilme.slice(11,14)
    console.log(listaFilme)
    return(
        <ContainerGaleria>
            <div>
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
            </div>
            <ContainerSegundaLista>
                    <ContainerTitleGaleria>Lorem ipsum</ContainerTitleGaleria>
                    <ul>
                    {item2.map((filme)=>(
                        <CardFilmeGaleria key={filme.id} fundo={url_img + filme.backdrop_path}><span>Status</span> <p>{filme.original_title}</p></CardFilmeGaleria>
                    ))}
                    </ul>
            </ContainerSegundaLista>
        </ContainerGaleria>
    )
}