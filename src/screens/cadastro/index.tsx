import Card from "../../components/card"
import Footer from "../../components/footer"
import FormularioCadastro from "../../components/formulario-cadastro"
import Header from "../../components/header"
import * as S from './styled'


export default function Cadastro(){

    return (
        <>
            <Header/>
            <S.Corpo>
                <Card>
                    <FormularioCadastro/>
                </Card>
            </S.Corpo>           
            <Footer/>
        </>
    )
}