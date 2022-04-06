import Image from "next/image"
import styled from "styled-components"

const Page = styled.div`
    text-align: center;
`
const Title = styled.h1`
    font-size: 2em;
    margin-bottom: 1em;
`

const Text = styled.p`
    max-width: 500px;
    margin: 0 auto 1.5em;
    line-height: 1.4;
    text-align: justify;
`

const About = () => {

    return (
        <Page>
            <Title>Sobre o Projeto</Title>
            <Text>
                <p>Projeto realizado acompanhando as aulas do professor <strong>Matheus Battisti</strong> em seu canal do Youtube - <strong>Hora de Codar</strong>.</p>
                <br />
                <p>Utilizei o styled components em vez de css modules. Apenas na hora de colocar as cores no tipo de pokemon que precisei usar o css modules, pois não consegui fazer usando o styled components.</p>
                <br />
                <p>Agradecimentos especiais ao professor <strong>Thiago M. Medeiros</strong> que me introduziu no Universo da Programação através do seu excelente curso <strong>Formação Full Stack JavaScript</strong>.</p>
                <br />
                Gratidão.
            </Text>
            <Image
                src="/images/charizard.png"
                width="300"
                height="300"
                alt="Charizard"
                />
        </Page>
    )
}

export default About