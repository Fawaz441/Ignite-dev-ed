import {useDispatch,useSelector} from 'react-redux'
import {loadGames} from '../actions/gamesAction'
import React,{useEffect} from 'react'
import Game from '../components/Game'
import {motion} from 'framer-motion'
import styled from 'styled-components'

const Home = () =>{
    const dispatch = useDispatch()
    useEffect(() => {
         dispatch(loadGames())
    },[dispatch])

    const {popular,newGames,upcoming} = useSelector(state => state.games)
    return(
        <GameList>
            <h2>Upcoming Games</h2>
            <Games>
                {upcoming.map(game => (
                    <Game key={game.slug} data={game}/>
                ))}
            </Games>
        </GameList>
    )
}


const GameList = styled(motion.div)`
    padding:0 5rem;
    h2{
        padding:5rem 0;
    }
`

const Games = styled(motion.div)`
    min-height:80vh;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    grid-column-gap:2rem;
    grid-row-gap:2rem;
    img{
        width:100%;
    }
`

export default Home