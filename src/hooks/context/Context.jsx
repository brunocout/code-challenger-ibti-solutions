import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext()

export default function Provider({ children }) {

    const [removedPokemon, setRemovedPokemon] = useState('')
    const [removedId, setRemovedId] = useState()
    const [pokemons, setPokemons] = useState([])
    const [pokemonSlot, setPokemonSlot] = useState(new Array(6).fill(null))
    const [owner, setOwner] = useState('')
    const [team, setTeam] = useState({
        id: '',
        owner: ''
    })
    const pokeball = document.querySelectorAll('.pokeball')

    const setSlot = (newPokemon) => {
        const newSlots = [...pokemonSlot];
        for (let i = 0; i < newSlots.length; i += 1) {
          const pokemon = newSlots[i];
          if (pokemon) continue;
            newSlots[i] = newPokemon;
            setPokemonSlot(newSlots);
            setRemovedId('')
          break;
        }
    }

    const addPokemonToRemove = (toRemove, select) => {
        setRemovedPokemon(toRemove)
        for (let i = 0; i < pokeball.length; i++) {
            pokeball[i].classList.add('isGray')
        }
        select.classList.remove('isGray')
    }

    useEffect(() => {
        for (let i = 0; i < pokeball.length; i++) {
            if (removedPokemon.length == 0) {
                pokeball[i].classList.remove('isGray')
            }
        }
    }, [removedPokemon])

    const removeFromSlot = () => {
        if (removedPokemon.length != 0 && pokemonSlot !== null) {
            setPokemonSlot(pokemonSlot.map(id => id === removedPokemon ? null + setRemovedId(id.id) : id))
            setRemovedPokemon('')
        }
    }

    const createTeam = () => {
        if (owner.length != 0) {
            setTeam({
                id: pokemonSlot.map(id => id.id),
                owner: owner
            })
            console.log('success')
            console.log(team)
        } else {
            console.log('error')
        }
        
    }

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?&limit=10')
        .then(value => value.json())
        .then(data => {
            setPokemons(data.results)
        })
    }, [])

    const values = {
        pokemons,
        setPokemons,
        pokemonSlot,
        setSlot,
        removedPokemon,
        addPokemonToRemove,
        removeFromSlot,
        removedId,
        createTeam,
        owner,
        setOwner,
        setTeam
    }

    return ( 
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
     );
}

