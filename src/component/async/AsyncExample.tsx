
import React, { useState, useEffect } from 'react'

import UserForm from "./components/UserForm"
import ItemInfo from "./components/InfoView"





function AsyncExample() {

    const [searchValue, setSearchValue] = useState("")

    function handleSubmit(newSearchItem : string) {
        setSearchValue(newSearchItem)
     }

    return (
        <div>
            <div style={{display:"grid",placeItems:"center",height:"100px",width:"250px", margin:"10px", backgroundColor:"#5e6167", borderRadius:'5px'}}>
            </div>
            <UserForm searchValue={searchValue} submitIt={handleSubmit} />
            <ItemInfo searchValue={searchValue }/>
        </div>
)
}
export default  AsyncExample