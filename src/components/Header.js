import Link from 'next/link'
import Image from 'next/image'

import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 1.2em;
  margin-bottom: 2em;
  background-color: #333;
  color: #fff;
`

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Title = styled.h1`
  margin-left: .5em;
`

const LinkUl = styled.ul`
  display: flex;
  list-style: none;
`

const LinkLi = styled.li`
  margin-right: 1.3em;
`

const LinkA = styled.a`
  color: #fff;
  text-decoration: none;
  transition: -4s;
  border-bottom: 2px solid transparent;

  &:hover {
    border-color: #fff;
  }
`

const Header = () => {
  return (
    <Nav>
      <Logo>
        <Image
          src="/images/pokeball.png"
          width="30"
          height="30"
          alt="PokeNext"
        />
        <Title>PokeNext</Title>
      </Logo>
      <LinkUl>
        <LinkLi>
          <Link href="/">
            <LinkA>Home</LinkA>
          </Link>
        </LinkLi>
        <LinkLi>
          <Link href="/about">
            <LinkA>Sobre</LinkA>
          </Link>
        </LinkLi>
      </LinkUl>
    </Nav>
  )
}

export default Header