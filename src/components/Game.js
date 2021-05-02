import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'

const StyledGame = styled.div`
    min-height:30vh;
    box-shadow:0 5px 30px rgba(0,0,0,0.2);
    text-align:center;
    border-radius:1rem;
    overflow:hidden;
    img{
        height:40vh;
        width:100%;
        object-fit:cover;
    }
`

function Game({data:{released,name,background_image}} ) {
    return (
        <StyledGame>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={background_image} alt={name}/>
        </StyledGame>
    )
}



export default Game
