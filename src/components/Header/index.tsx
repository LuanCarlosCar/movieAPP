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
                    <li><Link href='/'><ItemLink>Marvel</ItemLink></Link></li>
                    <li><Link href='/dc'><ItemLink>DC</ItemLink></Link></li>
                    <li><Link href='#'><ItemLink>Filmes</ItemLink></Link></li>
                    <li><Link href='#'><ItemLink>Animes</ItemLink></Link></li>
                    <li><Link href='#'><ItemLink>Games</ItemLink></Link></li>
                    <li><Link href='#'><ItemLinkDestaque>Minha Conta</ItemLinkDestaque></Link></li>
                </ContainerLinks>
            </nav>
        </ContainerHeader>
    )
}