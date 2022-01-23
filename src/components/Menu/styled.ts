import styled from "styled-components";
import Image from 'next/image';
export interface fundoProps{
    fundo:string
}
export const NavBar = styled.nav`
    position: fixed;
    height: 1710px;
    width: 650px;
    background-color: #8257E6;
    z-index: 99;
`;
export const ContainerLinks = styled.ul`
    align-items: center;
    justify-content: center;
    text-align: center;
    li{
        margin-bottom: 50px;
    }

    li:first-child{
        a{
            color: #13131F;
            border-bottom: 0.125rem solid #8257E6;
            box-sizing: border-box;
            

        }
    }
`;
export const ItemLink = styled.a`
    font-family: 'Inter', sans-serif;
    font-size: 70px;
    font-weight: 500;
    color: #13131F;
    transition: .3s;
    cursor: pointer;
    &:hover{
        color: #FEFBFB;
    }
`;
export const ItemLinkDestaque = styled.a`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 70px;
    font-weight: 500;
    color: #13131F;
    border: 0.125rem solid black;
    box-sizing: border-box;
    padding: 0.3125rem 1.25rem;
    border-radius: 1.875rem;
    cursor: pointer;
    transition: .2s;
    &:hover{
        background-color: #8257E6;

    }
`;

export const ContainerImgMenu = styled.div`
    background-color: black ;
    width: 100%;
    height: 200px;
    align-items: center;
    text-align: center;
    display: flex;
    justify-content: space-evenly;
`;
