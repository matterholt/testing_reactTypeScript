
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API = "https://pokeapi.co/api/v2/pokemon/bibarel"

type pokemonType = {
    slot: number;
    type: {
        name: string;
        url: string;
    }
}

const PokemonType = ({typeName}: {typeName: pokemonType[]}) => (
    <ul>
        {typeName.map((x: pokemonType) => (<li>{JSON.stringify(x)}</li>))}
    </ul>
)



const ViewIt = ({ data }: { data: any }) => {

    return (
        <div>
            <h3>name of {data.name}</h3>
            <img alt="poke pic" src={data.sprites.front_default} />
            <PokemonType typeName={ data.types }/>
        </div>
    )

}

type dataProps = {
     state:{ status: string,
        data: null | object,
        error: null | string}
}

const StatusView = ({ state }: dataProps) => {
    const { status, data, error } = state


    if (status === 'idle') {
        return(<h2>status idle</h2>)
    }
        if (status === 'loading') {
        return(<h2>Loading</h2>)
    }
    if (status === 'success') {
        return (<ViewIt data={data }/>)
    }
        if (status === 'error') {
            return (<h2>{error }</h2>)
    }
    return null
    
}

interface infoProp {
        status: string,
        data: null | object,
        error: null | string
}

function ItemInfo({ searchValue }:{searchValue:string}) {

    const [state, setState] = useState<infoProp>({
        status: 'idle',
        data: null,
        error: null
    })

    useEffect(() => {
        const fetchItems = async () => {
            try {
                setState({ ...state, status: "loading" })
                const respData = await axios.get(API)
                console.log(respData.data.types)
                setState({...state, data:respData.data, status:"success"})
            } catch (e) {
                setState({...state, error: e, status:"error"})
            }
        }
        fetchItems()
    },[])
    
    
    return <StatusView state={state}/>
}

export default ItemInfo
