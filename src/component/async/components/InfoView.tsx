
import React, { useState, useEffect } from 'react'
import axios from 'axios'


const ViewIt = ({ data }: {data:any})=>{
    return (
        <div>
            <h3>name of</h3>
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
    
    
    return <StatusView state={state}/>
}

export default ItemInfo
