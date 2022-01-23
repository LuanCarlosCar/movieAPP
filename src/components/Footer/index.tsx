import Logo from '../../assets/img/Naped.svg'
import Image from "next/image";
import { ContainerFooter } from './styled';
export default function Footer() {
    return(
        <ContainerFooter>
            <Image src={Logo} alt='logo' />
            <p>Todas as imagens de filmes, séries e etc são marcas registradas <br/> dos seus respectivos proprietários.</p>
        </ContainerFooter>
    )
    
}