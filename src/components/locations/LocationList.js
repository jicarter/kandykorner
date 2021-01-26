import React, { useState, useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { Location } from "./Location"
import "./Location.css"

export const LocationList = () => {
    const { getLocations, locations } = useContext(LocationContext)

    useEffect(()=>{
        getLocations()
    }, [])

    return (
        <div className="locations">
            <h2>Locations</h2>
            {
                locations.map(location => {
                    return <Location key={location.id} location={location} />
                })
            }
        </div>
    )
}