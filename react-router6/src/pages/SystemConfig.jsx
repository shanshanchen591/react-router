import React from "react"
import { Outlet } from "react-router"

const SystemConfig = ()=>{
    return(
        <div>
            SystemConfig Page
            <Outlet/>
        </div>
    )
}

export default SystemConfig