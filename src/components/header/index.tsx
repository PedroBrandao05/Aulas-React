import * as S from './styled'

export default function Header() {

    return (
        <S.Cabecalho>
            <S.ContainerLogo>
                <S.ImagemLogo alt='Logo da Global Sales'/>
                <S.TituloLogo>Global<b>Sales</b></S.TituloLogo>
            </S.ContainerLogo>
            <S.LinkContato href='/cadastro'>Contato</S.LinkContato>
        </S.Cabecalho>
    )
}
