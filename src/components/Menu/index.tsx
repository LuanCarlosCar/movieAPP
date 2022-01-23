import { NavBar,ContainerImgMenu, ContainerLinks, ItemLinkDestaque, ItemLink } from './styled';
import Logo from '../../assets/img/Naped.svg'
import Image from "next/image";
import Link from "next/link";



export default function Menu(){
    return(
        <NavBar>
            <ContainerImgMenu>
            <Image       
                
                alt="Picture of the author"
                width={260}
                height={100} src={Logo} />
            </ContainerImgMenu>
            <ContainerLinks>
                    <li><Link href='#'><ItemLink>Home</ItemLink></Link></li>
                    <li><Link href='#'><ItemLink>Séries</ItemLink></Link></li>
                    <li><Link href='#'><ItemLink>Filmes</ItemLink></Link></li>
                    <li><Link href='#'><ItemLink>Animes</ItemLink></Link></li>
                    <li><Link href='#'><ItemLink>Games</ItemLink></Link></li>
                    <li><Link href='https://www.youtube.com/watch?v=vc6vs-l5dkc&list=RDvc6vs-l5dkc&start_radio=1&ab_channel=FueledByRamen'><ItemLinkDestaque href='https://www.youtube.com/watch?v=vc6vs-l5dkc&list=RDvc6vs-l5dkc&start_radio=1&ab_channel=FueledByRamen' >Minha Conta</ItemLinkDestaque></Link></li>
                </ContainerLinks>
        </NavBar>
    )
}