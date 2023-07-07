import { useState, useEffect } from "react"
import "./PokemonsPage.css"
import {Link} from "react-router-dom"

const PokemonsPage = () => {

    const [pokemons, setPokemons] = useState([])

    const getPokemons = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
        .then(res => res.json())
        .then(data => {
            const results = data.results

            const OnePokemonData = results.map(pokemon => {
                return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                .then(res => res.json())
            })

            Promise.all(OnePokemonData).then(data => setPokemons(data))

        })
    }

    useEffect(() => {
        getPokemons()
    }, [])

    const TypesAndColors = {
        fire: 'red',
        grass: 'lightgreen',
        water: 'lightblue'
    }

// לפתוח קומפוננטה חדשה לHMTL 
    return <ul className="pokemons-container">
        {pokemons && pokemons.map((pokemon, index) => {
            const color = pokemon.types[0].type.name

            return <Link to={`/pokemon/${pokemon.id}`} className="pokemon" key={index}
            
            style={{backgroundColor: TypesAndColors[color]}}
            >
            <p>{pokemon.name}</p>
            <img src={pokemon.sprites.front_default} alt="image" />
            </Link>
        })}
    </ul>
}

export default PokemonsPage