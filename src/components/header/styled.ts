import styled from "styled-components";


export const Cabecalho = styled.header`
    width: 100vw; 
    background-color: var(--azul-claro);
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 6rem;
    padding-inline: 1.5rem;
`

export const ContainerLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`

export const ImagemLogo = styled.img`
    content: url('/public/assets/Logo-GlobalSales.svg');
`
export const TituloLogo = styled.h1`
    color: white;
    font-size: 16px;
`

export const LinkContato = styled.a`
    color: white;
    font-size: 12px;
    text-decoration: none;
    padding-right: 3rem;
`