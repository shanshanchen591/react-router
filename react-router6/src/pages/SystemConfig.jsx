import React from "react"
import { Outlet } from "react-router"

const SystemConfig = ()=>{
    return(
        <div>
            Config Page
            <Outlet/>
        </div>
    )
}

export default SystemConfig