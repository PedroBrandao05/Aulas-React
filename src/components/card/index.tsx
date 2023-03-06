import * as S from './styled'

interface ICard {
    children: any
}

export default function Card({ children }: ICard) {

    return (
        <S.Container>
            {children}
        </S.Container>
    )
}