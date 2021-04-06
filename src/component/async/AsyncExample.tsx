
import { useState, useEffect } from 'react'
import axios from 'axios'




const ViewIt = ({ pokemon }: { pokemon: {name:null |string}})=>{
    return (
        <div>
            <h3>{pokemon.name}</h3>
        </div>
    )

}

interface Prop { status: string, pokemon: { name: null | string } }

const StatusView = ({ status, pokemon }: Prop) => {
    if (status === 'idle') {
        return(<h2>status idle</h2>)
    }
        if (status === 'loading') {
        return(<h2>Loading</h2>)
    }
    if (status === 'success') {
        return (<ViewIt pokemon={ pokemon}/>)
    }
        if (status === 'error') {
        return(<h2>status error</h2>)
    }
    return null
    
}


const PokeForm = () => {
    const [pokemonName, setPokemonName] = useState('')
    function handleChange(e: React.FormEvent<HTMLInputElement>) {
        e.preventDefault()
            setPokemonName(e.currentTarget.value)
    }
    return (
        <form>

         <label htmlFor="pokemon_input">Pokemon</label>
            <input type="text" id="pokemon_input" name="pokemonName" value={pokemonName} onChange={handleChange }/>
        
            <button onClick={() => setPokemonName('dito')}>find one</button>
            <button onClick={() => setPokemonName("")}>clear It</button>
        </form>
    )
}
 





function AsyncExample() {
    const [pokemon, setPokemon] = useState<{name:null | string }>({name:'dito'})
    const [status, setStatus] = useState('idle')

    


    return (
        <div>
            <div style={{display:"grid",placeItems:"center",height:"100px",width:"250px", margin:"10px", backgroundColor:"#5e6167", borderRadius:'5px'}}>
                 <StatusView status={status} pokemon = {pokemon}/>
            </div>
            <PokeForm/>

        </div>
)
}
export default  AsyncExample