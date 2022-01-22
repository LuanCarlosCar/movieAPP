import Link from "next/link";
import { ContainerHeader, ContainerLinks, ItemLinkDestaque, ItemLink } from './styled';
import Logo from '../../assets/img/Naped.svg'
import Image from "next/image";

export default function Header(){
    return(
        <ContainerHeader>
            <Image src={Logo} alt="logo da naped" />
            <nav>
                <ContainerLinks>
                    <li><Link href='#'><ItemLink>Home</ItemLink></Link></li>
                    <li><Link href='#'><ItemLink>Séries</ItemLink></Link></li>
                    <li><Link href='#'><ItemLink>Filmes</ItemLink></Link></li>
                    <li><Link href='#'><ItemLink>Animes</ItemLink></Link></li>
                    <li><Link href='#'><ItemLink>Games</ItemLink></Link></li>
                    <li><Link href='https://www.youtube.com/watch?v=vc6vs-l5dkc&list=RDvc6vs-l5dkc&start_radio=1&ab_channel=FueledByRamen'><ItemLinkDestaque href='https://www.youtube.com/watch?v=vc6vs-l5dkc&list=RDvc6vs-l5dkc&start_radio=1&ab_channel=FueledByRamen' >Minha Conta</ItemLinkDestaque></Link></li>
                </ContainerLinks>
            </nav>
        </ContainerHeader>
    )
}