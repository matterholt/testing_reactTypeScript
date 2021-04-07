import { useState } from 'react'
function UserForm ({ searchValue, submitIt }: {searchValue:string,submitIt:(newSearchItem: string)=>void}){
    const [pokemonName, setPokemonName] = useState(searchValue)

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        submitIt(e.currentTarget.value)
    }
    
    function handleChange(e: React.FormEvent<HTMLInputElement>) {
        setPokemonName(e.currentTarget.value)
    }

    return (
        <form onSubmit={handleSubmit }>
         <label htmlFor="pokemon_input">Pokemon</label>
            <input type="text" id="pokemon_input" name="pokemonName" value={pokemonName} onChange={handleChange} />
            <div>
                <button type="submit"> Submit </button>
                <button onClick={() => setPokemonName('dito')}>ditto</button>
                <button onClick={() => setPokemonName("")}>clear It</button>
            </div>
        </form>
    )
}
export default UserForm