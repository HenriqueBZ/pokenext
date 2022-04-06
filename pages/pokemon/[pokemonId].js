import Image from "next/image"
import styled from "styled-components"
import styles from '../../styles/Pokemon.module.css'
import { useRouter } from "next/router"

export const getStaticPaths = async () => {
    
    const maxPokemons = 251
    const api = 'https://pokeapi.co/api/v2/pokemon/'

    const res = await fetch(`${api}/?limit=${maxPokemons}`)
    const data = await res.json()

    const paths = data.results.map((pokemon, index) => {
        return {
            params: { pokemonId: (index + 1).toString() }
        }
    })

    return {
        paths,
        fallback: true,
    }

}

export const getStaticProps = async (context) => {

    const id = context.params.pokemonId

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

    const data = await res.json()

    return {
        props: { pokemon: data }
    }
}

const Container = styled.div`
    text-align: center;
`

const Title = styled.h1`
    font-size: 2.5em;
    text-transform: capitalize;
    background-color: #333;
    color: #fff;
    padding: .3em;
    margin: 0.8em auto;
    width: 300px;
`

const Subtitle = styled.h3`
    margin: 0.6em auto;
    font-size: 1.2em;
`

const Types = styled.div`
    display: flex;    
    align-items: center;
    justify-content: center;
`

const DataContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.5em;
`

const DataDiv = styled.div`
    margin: 1em 0;
    padding: 0 1em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
`

const Pokemon = ({ pokemon }) => {

    const router = useRouter()

    if(router.isFallback) {
        return <div>Carregando...</div>
    }
        

    return (
        <Container>
            <Title>{pokemon.name}</Title>
            <Image
                src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
                width="200"
                height="200" 
                alt={pokemon.name}
            />
            <div>
                <Subtitle>Número:</Subtitle>
                <p>#{pokemon.id}</p>
            </div>
            <div>
                <Subtitle>Tipo:</Subtitle>
                <Types>
                    {pokemon.types.map((item, index) => (
                        <div
                            key={index}
                            className={`${styles.type} ${styles['type_' + item.type.name]}`}
                        >
                            {item.type.name}
                        </div>
                    ))}
                </Types>
            </div>
            <DataContainer>
                <DataDiv>
                    <h4>Altura:</h4>
                    <p>{pokemon.height * 10} cm</p>
                </DataDiv>
                <DataDiv>
                    <h4>Peso:</h4>
                    <p>{pokemon.weight / 10} kg</p>
                </DataDiv>
            </DataContainer>
        </Container>
    )
}

export default Pokemon