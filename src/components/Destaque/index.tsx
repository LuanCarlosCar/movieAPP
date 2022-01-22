import { DestaqueTitle, DestaqueText, DestaqueContainer, DestaqueCardFilme, CardFilme } from './styled';
import { ListaFilme } from '../../pages/index';

export default function Destaque({listaFilme }: ListaFilme ){
    const url_img = 'https://image.tmdb.org/t/p/w500'
    const item1 = listaFilme.slice(10,11)
    const item2 = listaFilme.slice(3,5)
 
    return(
        <DestaqueContainer>
            
            
            <DestaqueTitle>Mundo nerd? <br/>Naped!</DestaqueTitle>
            <DestaqueText>O Naped pode ser sua fonte de informações sobre <br/> o mundo nerd e outros assuntos relacionados</DestaqueText>
            
            <ul>
                {item1.map((filme)=>(
                    <DestaqueCardFilme key={filme.id} fundo={url_img + filme.backdrop_path}>
                        <span>Status</span>
                        <p>{filme.original_title}</p>
                        </DestaqueCardFilme>))}

                <div>
                    {item2.map((filme)=>(
                        <CardFilme key={filme.id} fundo={url_img + filme.backdrop_path}><span>Status</span> <p>{filme.original_title}</p></CardFilme>
                    ))}
                </div>
            </ul>
        </DestaqueContainer>
    )
}



 
 