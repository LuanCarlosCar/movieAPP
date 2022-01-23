import styled from "styled-components";
import Image from 'next/image';
export interface fundoProps{
    fundo:string
}
export const NavBar = styled.nav`
    position: absolute;
    height: 100vh;
    width: 70vw;
    background-color: red;
    z-index: 99;
`;
export const ContainerLinks = styled.ul`
    align-items: center;
    justify-content: center;

    li:first-child{
        a{
            color: #FEFBFB;
            border-bottom: 0.125rem solid #8257E6;
            box-sizing: border-box;

        }
    }
`;
export const ItemLink = styled.a`
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    color: #c4c4c4;
    transition: .3s;
    cursor: pointer;
    &:hover{
        color: #FEFBFB;
    }
`;
export const ItemLinkDestaque = styled.a`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 0.875rem;
    font-weight: 500;
    color: #FEFBFB;
    border: 0.125rem solid #8257E6;
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
    height: 100px;
    align-items: center;
    text-align: center;
`;
