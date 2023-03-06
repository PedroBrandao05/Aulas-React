import * as S from './styled'

export default function FormularioCadastro(){

    return(
        <>
            <S.NomeFormulario>
                Cadastro
            </S.NomeFormulario>
            <S.Form>
                <S.Label htmlFor='nome'>Digite seu nome</S.Label>
                <S.InputContainer>
                    <S.Input type="text" placeholder='João da Silva' id='nome' name='nome' />
                </S.InputContainer>
                <S.Label htmlFor='email'>Digite seu email</S.Label>
                <S.InputContainer>
                    <S.Input type="email" placeholder='joaosilva@email.com' id='email' name='email'/>
                </S.InputContainer>
                <S.Label htmlFor='senha'>Digite sua senha</S.Label>
                <S.InputContainer>
                    <S.Input id='senha' value="alguma coisa" type="password" name='senha'/>
                    <S.BotaoVerSenha/>
                </S.InputContainer>
                <S.Label htmlFor='confirmaSenha'>Confirme sua senha</S.Label>
                <S.InputContainer>
                    <S.Input id='confirmaSenha' value="alguma coisa" type="password" name='senha'/>
                    <S.BotaoVerSenha/>
                </S.InputContainer>
                <S.ContainerLogin>
                    <S.TextoLogin>Já tem uma conta?</S.TextoLogin>
                    <S.LinkLogin href='/login'>Faça login</S.LinkLogin>
                </S.ContainerLogin>
            </S.Form>
        </>
    )
}