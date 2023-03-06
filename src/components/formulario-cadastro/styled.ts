import styled from "styled-components";

export const NomeFormulario = styled.h2`
    font-size: 16px;
    font-weight: 700;
    padding-block: 2rem;
`
export const InputContainer = styled.div`
    background: #E8E8E8;
    border: 3px solid #7B8590;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    padding-inline: 0.6rem;
`
export const Input = styled.input`
    background-color: transparent;
    border: none;
    width: auto;

    :focus {
        outline: none; 
    }
    ::placeholder{
        color: #797676;
    }
`
export const Label = styled.label`
    font-size: 12px;
    font-weight: 700;
`
export const TextoLogin = styled.p`
    font-weight: 700;
`
export const LinkLogin = styled.a`
    color: var(--azul-claro);
`
export const BotaoVerSenha = styled.button`
    border: none;
    background-color: transparent;
    background-image: url('/public/assets/eye-locked.svg');
    width: 2.2rem;
    height: 2.2rem;
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: flex-start;
    width: 24.5rem;
`
export const ContainerLogin = styled.div `
    display: flex;
    justify-content: space-between;
`