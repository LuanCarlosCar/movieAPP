import { ListaFilme } from "../../pages";
import { ContainerConteudo, ContainerImg, ContainerLista, ContainerDetalhe, TextDetalhe, TextPopularity, Textdescription, BtnLink } from './styled';



export default function Galeria({listaFilme }: ListaFilme ) {
    const url_img = 'https://image.tmdb.org/t/p/w500'
    console.log(listaFilme)
    return(
        <section>
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
            <div>

            </div>
        </section>
    )
}