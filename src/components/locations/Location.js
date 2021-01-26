import React from "react"
import "./Location.css"
import { Link } from "react-router-dom"

export const Location = ({ location }) => (
    <section className="location">
        <h3 className="location__address">
          <Link to={`/locations/detail/${location.id}`}>
            { location.address }
          </Link>
        </h3>
        <h3 className="location__size">
          <Link to={`/locations/detail/${location.id}`}>
            { location.size }
          </Link>
        </h3>
        <h3 className="location__accessible">
          <Link to={`/locations/detail/${location.id}`}>
            { location.accessible }
          </Link>
        </h3>
    </section>
)