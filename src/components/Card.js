import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2em 1em;
    margin-bottom: 2em;
    width: 23%;
    border-radius: 1em;
    border: 2px solid #e33d33;
    box-shadow: 5px 5px 12px rgba(0, 0, 0, .5);
    background-color: #333;
    color: #fff;
`

const Span = styled.p`
    margin: 1em 0;
    background-color: #e33d33;
    border-radius: 5px;
    padding: 5px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Title = styled.h3`
    text-transform: capitalize;
    margin-bottom: 1em;
    font-size: 1.4em;
`

const Button = styled.button`
    text-decoration: none;
    background-color: #fff;
    color: #222;
    padding: .7em 1.2em;
    border-radius: 5px;
    font-weight: bold;
    transition: .4s;

    &:hover {
        background-color: #e33d33;
        color: #fff;
    }
`

const Card = ({ pokemon }) => {

    return (
        <Div>
            <Image
                src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
                width="120"
                height="120" 
                alt={pokemon.name}
            />
            <Span>#{pokemon.id}</Span>
            <Title>{pokemon.name}</Title>
            <Link href={`/pokemon/${pokemon.id}`}>
                <Button>Detalhes</Button>
            </Link>
        </Div>
    )
}

export default Card