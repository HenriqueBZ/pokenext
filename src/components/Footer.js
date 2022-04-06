import styled from "styled-components"

const Nav = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
    height: 150px;
    margin-top: 3em;
    border-top: 3px solid #111;
    color: #fff;
`

const Title = styled.span`
    font-weight: bold;
` 

const Footer = () => {

    return (
        <Nav>
            <Title>PokeNext</Title> &copy; 2022
        </Nav>
    )
}

export default Footer