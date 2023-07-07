import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const PokemonInfoPage = () => {

    const [pokemon, setPokemon] = useState()

    const location = useLocation() // pathname = "pokemon/idnumber"

    const getPokemon = () => {
        fetch(`https://pokeapi.co/api/v2${location.pathname}`)
        .then(res => res.json())
        .then(data => setPokemon(data))
    }


    useEffect(() => {
        getPokemon()
    }, [])
 

    return <div>
        {pokemon.name}
    </div>

}

export default PokemonInfoPage