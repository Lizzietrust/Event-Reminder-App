import React from "react"

export default function Header ({events}){
    return(
        <h1>{events.length} events today</h1>
    )
}