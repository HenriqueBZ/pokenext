import Image from "next/image"

import Card from "../src/components/Card"

import styled from "styled-components"

export async function getStaticProps() {

  const maxPokemons = 251
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  data.results.forEach((item, index) => {
    item.id = index + 1
  })

  return {
    props: {
      pokemons: data.results,
    }
  }

}

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
`

const Title = styled.h1`
  color: #e33D33;
  text-align: center;
  font-size: 3em;
  margin-right: .4em;
`
const Span = styled.span`
  color: #333;
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`

const Home = ({ pokemons }) => {

  return (
    <>
      <Div>
        <Title>Poke<Span>Next</Span></Title>
        <Image 
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="PokeNext"
        />
      </Div>
      <Container>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </Container>
    </>
  )
}

export default Home
